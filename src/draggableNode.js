// draggableNode.js

import React, { useState } from "react";

export const DraggableNode = ({ type, label, icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.target.style.cursor = 'grabbing';
    // sending nodeType over to ui.js. setData and getData specific to drag n drop operations
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={type}
      draggable
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        cursor: 'grab',
        minWidth: '80px',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'var(--secondary)',
        justifyContent: 'center',
        flexDirection: 'column',
        fontSize: '16px',
        fontWeight: '500',
        borderRadius: '8px',
        border: isHovered
          ? '3px solid white'
          : '3px solid rgba(255, 255, 255, 0.4)',
        boxShadow: isHovered
          ? '0 4px 8px rgba(255, 255, 255, 0.4)'
          : '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '0.25rem',
        transition: 'border 0.2s, box-shadow 0.2s',
      }}
    >
      {icon && React.cloneElement(icon, { style: { color: '#fff', fontSize: '24px' } })}
      <span style={{ color: '#fff', marginTop: icon ? '0.5rem' : '0' }}>{label}</span>
    </div>
  );
};