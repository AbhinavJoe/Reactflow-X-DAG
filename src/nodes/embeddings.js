// embeddings.js

import React, { useState } from 'react';
import { NodeStructure } from './nodeStructure';
import { Position } from 'reactflow';

export const Embeddings = ({ id, data }) => {
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
                Embedding Function:
                <select
                    value={inputType}
                    onChange={handleTypeChange}
                    style={{ display: 'block', width: '100%', padding: '0.25rem', marginTop: '0.25rem', borderRadius: '0.25rem', border: '1px solid #ccc' }}
                >
                    <option value="cosine">Cosine Similarity</option>
                    <option value="euclidean">Euclidean Distance</option>
                </select>
            </label>
        </>
    );

    const handles = [
        { type: 'source', position: Position.Right, id: `${id}-custom` },
        { type: 'target', position: Position.Top, id: `${id}-custom` }
    ];

    return <NodeStructure id={id} title="Embeddings" content={content} handles={handles} />;
};
