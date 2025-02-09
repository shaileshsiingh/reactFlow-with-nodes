import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

interface CustomNodeProps {
  data: {
    label: string;
    color: string;
    fontSize: number;
  };
  selected: boolean;
}

const CustomNode: React.FC<CustomNodeProps> = memo(({ data, selected }) => {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div
        className={`px-4 py-2 rounded-lg shadow-md transition-all duration-200 ${
          selected ? 'ring-2 ring-blue-500' : ''
        }`}
        style={{
          backgroundColor: data.color || '#ffffff',
          fontSize: `${data.fontSize}px`,
          border: '1px solid #222',
        }}
      >
        {data.label}
      </div>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
});

CustomNode.displayName = 'CustomNode';

export default CustomNode;