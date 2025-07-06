// components/NodePanel.jsx
import React from 'react';

const NodePanel = ({ onAdd }) => {
  return (
    <div style={{ width: 200, padding: 10, borderRight: '1px solid #ccc' }}>
      <h4>Nodes Panel</h4>
      <button
        onClick={onAdd}
        style={{ marginTop: 10, padding: 10, background: '#007bff', color: 'white', border: 'none', borderRadius: 5 }}
      >
        ➕ Add Text Message
      </button>
    </div>
  );
};

export default NodePanel;
