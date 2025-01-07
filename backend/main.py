from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Set
from collections import deque

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Node(BaseModel):
    id: str
    data: dict


class Edge(BaseModel):
    source: str
    target: str


class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]


def is_dag(edges: List[Edge], nodes: List[Node]) -> bool:
    # Create a set of node IDs for quick lookup
    node_ids = {node.id for node in nodes}

    # Validate edges connect to existing nodes
    for edge in edges:
        if edge.source not in node_ids or edge.target not in node_ids:
            print(f"Invalid edge: {edge.source} -> {edge.target}")
            return False

    # Create adjacency list and in-degree count
    adj_list: Dict[str, List[str]] = {node.id: [] for node in nodes}
    in_degree: Dict[str, int] = {node.id: 0 for node in nodes}

    # Build the graph
    for edge in edges:
        adj_list[edge.source].append(edge.target)
        in_degree[edge.target] += 1

    # Start with nodes that have no incoming edges
    queue = deque(
        [node_id for node_id, degree in in_degree.items() if degree == 0])

    visited_count = 0

    # Process the graph
    while queue:
        current = queue.popleft()
        visited_count += 1

        # Process all neighbors
        for neighbor in adj_list[current]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    # It's a DAG if we visited all nodes
    is_valid_dag = visited_count == len(nodes)
    if not is_valid_dag:
        print("Graph contains cycles or is disconnected")
    return is_valid_dag


@app.post('/pipelines/validate')
async def validate_pipeline(pipeline: Pipeline):
    try:
        print("Received Pipeline:", pipeline.dict())
        dag_result = is_dag(pipeline.edges, pipeline.nodes)
        print(f"Is DAG: {dag_result}")
        result = {
            "num_nodes": len(pipeline.nodes),
            "num_edges": len(pipeline.edges),
            "is_dag": dag_result
        }
        print('Result:', result)
        return result
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
