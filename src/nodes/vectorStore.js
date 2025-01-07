// vectorStore.js
import React, { useState } from 'react';
import { NodeStructure } from './nodeStructure';
import { Position } from 'reactflow';

export const VectorStore = ({ id, data }) => {
    const [inputType, setInputType] = useState(data.inputType);

    const handleTypeChange = (e) => {
        setInputType(e.target.value);
    };

    const content = (
        <>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>
                Name:
                <input
                    type="text"
                    value={id}
                    readOnly
                    style={{ display: 'block', width: '100%', padding: '0.25rem', marginTop: '0.25rem', borderRadius: '0.25rem', border: '1px solid #ccc' }}
                />
            </label>
            <label style={{ display: 'block' }}>
                List of Vector Stores:
                <select
                    value={inputType}
                    onChange={handleTypeChange}
                    style={{ display: 'block', width: '100%', padding: '0.25rem', marginTop: '0.25rem', borderRadius: '0.25rem', border: '1px solid #ccc' }}
                >
                    <option value="ChromaDB">ChromaDB</option>
                    <option value="FAISS">FAISS</option>
                    <option value="Pinecone">Pinecone</option>
                </select>
            </label>
        </>
    );

    const handles = [
        { type: 'source', position: Position.Right, id: `${id}-custom` },
        { type: 'target', position: Position.Top, id: `${id}-custom` }
    ];

    return <NodeStructure id={id} title="Vector Store" content={content} handles={handles} />;
};
