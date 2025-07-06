// components/CustomNode.jsx
import React from 'react';
import { Handle, Position } from 'reactflow';
//import './CustomNode.css'; // optional styling

const CustomNode = ({ data }) => {
  return (
    <div className="custom-node" style={{ padding: 10, border: '1px solid #555', borderRadius: 8, background: '#fff' }}>
      <strong>Send Message</strong>
      <p>{data.label}</p>

      {/* Output connector */}
      <Handle type="source" position={Position.Right} id="a" style={{ background: '#555' }} />

      {/* Input connector */}
      <Handle type="target" position={Position.Left} id="b" style={{ background: '#555' }} />
    </div>
  );
};

export default CustomNode;
