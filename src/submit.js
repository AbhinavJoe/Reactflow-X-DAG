// submit.js

import { useState } from "react";
import { useStore } from "./store";
import { Alert } from "./alert";
import { MdOutlinePlayCircleOutline } from "react-icons/md";


export const SubmitButton = () => {
    const [alertData, setAlertData] = useState(null);
    const [isHover, SetisHover] = useState(false);
    const { nodes, edges } = useStore((state) => ({
        nodes: state.nodes,
        edges: state.edges,
    }));

    const handleSubmit = async () => {
        // Prepare data to send to the backend and extract only the necessary node and edge data
        const graphData = {
            nodes: nodes.map((node) => ({
                id: node.id,
                data: node.data
            })),
            edges: edges.map((edge) => ({
                source: edge.source,
                target: edge.target
            }))
        };

        if (!graphData.nodes.length) {
            console.log("Graph data is missing or incomplete. No action taken.");
            return;
        }

        console.log("Payload sent to backend:", JSON.stringify(graphData, null, 2));

        try {
            const response = await fetch('http://localhost:8000/pipelines/validate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(graphData),
            });

            const result = await response.json();

            console.log('Pipeline Validation Result:', result);
            setAlertData({
                isDag: result.is_dag,
                nodes: result.num_nodes,
                edges: result.num_edges
            });
        } catch (error) {
            console.error('Error validating pipeline:', error);
        }
    };

    const handleClose = () => {
        setAlertData(null);
    };

    const hoverStyle = isHover ? { backgroundColor: 'var(--primary)' } : { backgroundColor: 'var(--secondary)' }

    return (
        <>
            <div
                style={{ ...hoverStyle, cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '80px', width: '80px', padding: '0.25rem', border: '3px solid rgba(255, 255, 255, 0.4)', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
                onMouseOver={() => SetisHover(true)}
                onMouseOut={() => SetisHover(false)}
                onClick={handleSubmit}
            >
                <MdOutlinePlayCircleOutline style={{ color: '#fff', fontSize: '24px' }} />
                <span style={{ marginTop: '0.5rem', fontSize: '16px', fontWeight: '500', color: 'white' }} >
                    Submit
                </span>
            </div >
            {alertData && <Alert isDag={alertData.isDag} nodes={alertData.nodes} edges={alertData.edges} onClose={handleClose} />}
        </>
    );
}