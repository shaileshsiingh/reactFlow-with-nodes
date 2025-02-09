import React, { useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls as FlowControls,
  NodeChange,
  applyNodeChanges,
} from 'reactflow';
import { Provider } from 'react-redux';
import { store } from './store';
import CustomNode from './components/CustomNode';
import Controls from './components/Controls';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './types';
import { selectNode, updateNodePosition } from './store/graphSlice';
import 'reactflow/dist/style.css';

const nodeTypes = {
  custom: CustomNode,
};

function FlowComponent() {
  const dispatch = useDispatch();
  const { nodes, edges } = useSelector((state: RootState) => state.graph.present);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      changes.forEach((change) => {
        if (change.type === 'position' && change.position) {
          dispatch(updateNodePosition({
            id: change.id,
            position: change.position,
          }));
        }
      });
    },
    [dispatch]
  );

  const onNodeClick = useCallback(
    (_: React.MouseEvent, node: { id: string }) => {
      dispatch(selectNode(node.id));
    },
    [dispatch]
  );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <FlowControls />
      </ReactFlow>
      <Controls />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <FlowComponent />
    </Provider>
  );
}

export default App;