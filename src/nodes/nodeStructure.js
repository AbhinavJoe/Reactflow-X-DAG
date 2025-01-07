// nodeStructure.js

import React from 'react';
import { Handle } from 'reactflow';

export const NodeStructure = ({ title, content, handles, styles }) => {
    const combinedHandleStyles = { height: 12, width: 12, backgroundColor: 'var(--primary)', ...handles.styles };

    return (
        <div style={{ maxWidth: 250, width: 'fit-content', display: 'flex', flexDirection: 'column', padding: '1rem', border: '3px solid var(--primary)', borderRadius: '0.75rem', backgroundColor: 'white', fontWeight: '600', fontSize: '1.125rem', lineHeight: '1.75rem', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', ...styles }}>
            {handles.map((handle, index) => (
                <Handle
                    key={index}
                    type={handle.type}
                    position={handle.position}
                    id={handle.id}
                    style={combinedHandleStyles}
                />
            ))}
            <span style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>{title}</span>
            <div className='nodrag' style={{ backgroundColor: 'var(--bgcol, #f0f0f0)', padding: '0.5rem', borderRadius: '0.5rem' }}>
                {content}
            </div>
        </div>
    );
};
