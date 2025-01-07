// outputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <div style={{ maxWidth: 225, width: 'fit-content', display: 'flex', flexDirection: 'column', padding: '1rem', border: '3px solid var(--primary)', borderRadius: '0.75rem', backgroundColor: 'white', fontWeight: '600', fontSize: '1.125rem', lineHeight: '1.75rem', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
        style={{ height: 12, width: 12, backgroundColor: 'var(--primary)' }}
      />
      <span style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>Output</span>
      <div className='nodrag' style={{ backgroundColor: 'var(--bgcol, #f0f0f0)', padding: '0.5rem', borderRadius: '0.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          Name:
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            style={{ display: 'block', width: '100%', padding: '0.25rem', marginTop: '0.25rem', borderRadius: '0.25rem', border: '1px solid #ccc' }}
          />
        </label>
        <label style={{ display: 'block' }}>
          Type:
          <select
            value={outputType}
            onChange={handleTypeChange}
            style={{ display: 'block', width: '100%', padding: '0.25rem', marginTop: '0.25rem', borderRadius: '0.25rem', border: '1px solid #ccc' }}
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </div>
  );
}
