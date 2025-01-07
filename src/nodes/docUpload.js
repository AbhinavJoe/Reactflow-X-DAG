// docUpload.js

import React from 'react';
import { NodeStructure } from './nodeStructure';
import { Position } from 'reactflow';

export const DocUpload = ({ id, data }) => {
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
            <button type='button' style={{ display: 'block', backgroundColor: 'white', alignSelf: 'center', border: '2px solid var(--primary)', borderRadius: '8px', padding: 3}}>Upload</button>
        </>
    );

    const handles = [
        { type: 'source', position: Position.Left, id: `${id}-custom` },
        { type: 'target', position: Position.Bottom, id: `${id}-custom` }
    ];

    return <NodeStructure id={id} title="Upload Document" content={content} handles={handles} />;
};
