// llmNode.js

import { Handle, Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {

  return (
    <div style={{ maxWidth: 225, width: 'fit-content', display: 'flex', flexDirection: 'column', padding: '1rem', border: '3px solid var(--primary)', borderRadius: '0.75rem', backgroundColor: 'white', fontWeight: '600', fontSize: '1.125rem', lineHeight: '1.75rem', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{ top: `${100 / 3}%`, height: 12, width: 12, backgroundColor: 'var(--primary)' }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{ top: `${200 / 3}%`, height: 12, width: 12, backgroundColor: 'var(--primary)' }}
      />
      <span style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>{id.replace('llm-', 'LLM-')}</span>
      <div className='nodrag' style={{ backgroundColor: 'var(--bgcol, #f0f0f0)', padding: '0.5rem', borderRadius: '0.5rem' }}>
        <label style={{ display: 'block' }}>
          List of LLMs:
          <select
            style={{ display: 'block', width: '100%', padding: '0.25rem', marginTop: '0.25rem', borderRadius: '0.25rem', border: '1px solid #ccc' }}
          >
            <option value="LLM-1">LLM-1</option>
            <option value="LLM-2">LLM-2</option>
            <option value="LLM-3">LLM-3</option>
          </select>
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
        style={{ height: 12, width: 12, backgroundColor: 'var(--primary)' }}
      />
    </div>
  );
}
