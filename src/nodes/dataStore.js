// dataStore.js

import React from 'react';
import { NodeStructure } from './nodeStructure';
import { Position } from 'reactflow';

export const DataStore = ({ id, data }) => {
    const content = (
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
            Name:
            <input
                type="text"
                value={id}
                readOnly
                style={{ display: 'block', width: '100%', padding: '0.25rem', marginTop: '0.25rem', borderRadius: '0.25rem', border: '1px solid #ccc' }}
            />
        </label>
    );

    const handles = [
        { type: 'source', position: Position.Left, id: `${id}-custom` },
        { type: 'target', position: Position.Bottom, id: `${id}-custom` }
    ];

    return <NodeStructure id={id} title="Data Store" content={content} handles={handles} />;
};
