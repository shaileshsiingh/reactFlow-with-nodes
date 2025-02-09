import { Node, Edge } from '../types';

export const generateInitialNodes = (): Node[] => {
  const nodes: Node[] = [];
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const radius = 200;

  for (let i = 0; i < 10; i++) {
    const angle = (i / 10) * 2 * Math.PI;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    nodes.push({
      id: `node-${i}`,
      type: 'custom', // Add this line to specify the custom node type
      position: { x, y },
      data: {
        label: `Node ${i + 1}`,
        color: '#ffffff',
        fontSize: 14,
      },
    });
  }

  return nodes;
};

export const generateInitialEdges = (): Edge[] => {
  const edges: Edge[] = [];

  // Create a circular connection pattern
  for (let i = 0; i < 10; i++) {
    edges.push({
      id: `edge-${i}`,
      source: `node-${i}`,
      target: `node-${(i + 1) % 10}`,
    });

    // Add some cross connections for more interesting visualization
    if (i < 5) {
      edges.push({
        id: `cross-edge-${i}`,
        source: `node-${i}`,
        target: `node-${i + 5}`,
      });
    }
  }

  return edges;
};