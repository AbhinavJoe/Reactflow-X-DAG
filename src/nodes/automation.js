// automation.js

import React from 'react';
import { NodeStructure } from './nodeStructure';
import { Position } from 'reactflow';

export const Automation = ({ id, data }) => {
    const content = (
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
            Automation Name:
            <input
                type="text"
                value={id}
                readOnly
                style={{ display: 'block', width: '100%', padding: '0.25rem', marginTop: '0.25rem', borderRadius: '0.25rem', border: '1px solid #ccc' }}
            />
        </label>
    );

    const handles = [
        { type: 'target', position: Position.Bottom, id: `${id}-custom` },
        { type: 'source', position: Position.Top, id: `${id}-custom` }
    ];

    return <NodeStructure id={id} title="Automation" content={content} handles={handles} />;
};
