// components/SettingsPanel.jsx
import React from 'react';

const SettingsPanel = ({ selectedNode, onChange }) => {
  return (
    <div style={{ width: 250, padding: 10, borderLeft: '1px solid #ccc' }}>
      <h4>Settings Panel</h4>
      {selectedNode ? (
        <>
          <label>Message Text:</label>
          <input
            type="text"
            value={selectedNode.data.label}
            onChange={(e) => onChange(e.target.value)}
            style={{ width: '100%', marginTop: 10, padding: 5 }}
          />
        </>
      ) : (
        <p>No node selected</p>
      )}
    </div>
  );
};

export default SettingsPanel;
