// textNode.js

import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  const handleTextChange = (e) => {
    const text = e.target.value;
    setCurrText(text);
    const regex = /\{\{(\w+)\}\}/g;
    const matches = [...text.matchAll(regex)];
    const newVariables = matches.map(match => match[1]);
    setVariables(newVariables);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [currText]);

  return (
    <div style={{ width: 400, height: 'fit-content', padding: '1rem', border: '3px solid var(--primary)', borderRadius: '0.75rem', backgroundColor: 'white', fontWeight: '600', fontSize: '1.125rem', lineHeight: '1.75rem', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <span style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>Text Input</span>
      <div className='nodrag' style={{ backgroundColor: 'var(--bgcol, #f0f0f0)', padding: '0.5rem', borderRadius: '0.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          Text:
          <textarea
            ref={textareaRef}
            className='scroll-container'
            value={currText}
            onChange={handleTextChange}
            style={{ display: 'block', width: '100%', padding: '0.25rem', marginTop: '0.25rem', borderRadius: '0.25rem', border: '1px solid #ccc', resize: 'vertical', flex: 'grow', maxHeight: 250 }}
          />
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{ height: 12, width: 12, backgroundColor: 'var(--primary)' }}
      />
      {variables.map((variable, index) => (
        <div>
          <Handle
            key={index}
            type="target"
            position={Position.Left}
            id={`${id}-${variable}`}
            style={{ top: `${40 * (index + 1)}px`, height: 12, width: 12, backgroundColor: 'var(--primary)' }}
          />
          <span key={index} style={{ position: 'absolute', left: '-50px', top: `${40 * (index + 1)}px`, display: 'flex', alignItems: 'center', fontSize: '15px' }}>{variable}</span>
        </div>
      ))}
    </div>
  );
}
