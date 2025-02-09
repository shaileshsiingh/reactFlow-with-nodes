import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Undo2, Redo2 } from 'lucide-react';
import { RootState } from '../types';
import {
  updateNodeColor,
  updateNodeFontSize,
  undo,
  redo,
} from '../store/graphSlice';

const Controls: React.FC = () => {
  const dispatch = useDispatch();
  const selectedNode = useSelector((state: RootState) => state.graph.present.selectedNode);
  const { past, future } = useSelector((state: RootState) => state.graph);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedNode) {
      dispatch(updateNodeColor({ id: selectedNode, color: e.target.value }));
    }
  };

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedNode) {
      dispatch(updateNodeFontSize({
        id: selectedNode,
        fontSize: parseInt(e.target.value),
      }));
    }
  };

  return (
    <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg">
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => dispatch(undo())}
            disabled={past.length === 0}
            className={`p-2 rounded ${
              past.length === 0 ? 'bg-gray-200' : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            <Undo2 size={20} />
          </button>
          <button
            onClick={() => dispatch(redo())}
            disabled={future.length === 0}
            className={`p-2 rounded ${
              future.length === 0 ? 'bg-gray-200' : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            <Redo2 size={20} />
          </button>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Node Color
          </label>
          <input
            type="color"
            onChange={handleColorChange}
            disabled={!selectedNode}
            className="w-full h-8 rounded cursor-pointer"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Font Size: {selectedNode ? '12px - 24px' : 'Select a node'}
          </label>
          <input
            type="range"
            min="12"
            max="24"
            onChange={handleFontSizeChange}
            disabled={!selectedNode}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Controls;