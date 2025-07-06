// App.js
import React, { useCallback, useState } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';

import CustomNode from './components/CustomNode';
import NodePanel from './components/NodePanel';
import SettingsPanel from './components/SettingsPanel';

const nodeTypes = { custom: CustomNode };

let nodeId = 3;

function FlowBuilder() {
  const [nodes, setNodes, onNodesChange] = useNodesState([
    { id: '1', type: 'custom', position: { x: 100, y: 100 }, data: { label: 'Hello!' } },
    { id: '2', type: 'custom', position: { x: 300, y: 100 }, data: { label: 'How can I help you?' } },
  ]);

  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNode, setSelectedNode] = useState(null);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: '#007bff' } }, eds)),
    [setEdges]
  );

  const handleAddNode = () => {
    const newNode = {
      id: `${nodeId++}`,
      type: 'custom',
      position: { x: Math.random() * 250, y: Math.random() * 300 },
      data: { label: 'New message...' },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const handleNodeClick = (_, node) => {
    setSelectedNode(node);
  };

  const handleTextChange = (newText) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === selectedNode.id) {
          return { ...node, data: { ...node.data, label: newText } };
        }
        return node;
      })
    );
    setSelectedNode((prev) => ({ ...prev, data: { ...prev.data, label: newText } }));
  };

  const handleSave = () => {
    const sourceIds = edges.map((e) => e.source);
    const unlinked = nodes.filter((n) => !sourceIds.includes(n.id));
    if (unlinked.length > 1) {
      alert('❌ Cannot save: more than one node has no outgoing edge');
    } else {
      alert('✅ Flow saved!');
      console.log({ nodes, edges });
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <NodePanel onAdd={handleAddNode} />

      <div style={{ flexGrow: 1, position: 'relative' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={handleNodeClick}
          nodeTypes={nodeTypes}
          fitView
        />
        <button
          onClick={handleSave}
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: 5,
          }}
        >
          💾 Save Flow
        </button>
      </div>

      <SettingsPanel selectedNode={selectedNode} onChange={handleTextChange} />
    </div>
  );
}

export default function App() {
  return (
    <ReactFlowProvider>
      <FlowBuilder />
    </ReactFlowProvider>
  );
}
