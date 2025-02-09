import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Node, Edge, GraphState, HistoryState } from '../types';
import { generateInitialNodes, generateInitialEdges } from '../utils/graphUtils';

const initialNodes = generateInitialNodes();
const initialEdges = generateInitialEdges();

const initialState: HistoryState = {
  past: [],
  present: {
    nodes: initialNodes,
    edges: initialEdges,
    selectedNode: null,
  },
  future: [],
};

const graphSlice = createSlice({
  name: 'graph',
  initialState,
  reducers: {
    updateNodeColor: (state, action: PayloadAction<{ id: string; color: string }>) => {
      const newPresent = {
        ...state.present,
        nodes: state.present.nodes.map(node =>
          node.id === action.payload.id
            ? { ...node, data: { ...node.data, color: action.payload.color } }
            : node
        ),
      };
      
      state.past.push(state.present);
      state.present = newPresent;
      state.future = [];
    },
    
    updateNodeFontSize: (state, action: PayloadAction<{ id: string; fontSize: number }>) => {
      const newPresent = {
        ...state.present,
        nodes: state.present.nodes.map(node =>
          node.id === action.payload.id
            ? { ...node, data: { ...node.data, fontSize: action.payload.fontSize } }
            : node
        ),
      };
      
      state.past.push(state.present);
      state.present = newPresent;
      state.future = [];
    },
    
    updateNodePosition: (state, action: PayloadAction<{ id: string; position: { x: number; y: number } }>) => {
      const newPresent = {
        ...state.present,
        nodes: state.present.nodes.map(node =>
          node.id === action.payload.id
            ? { ...node, position: action.payload.position }
            : node
        ),
      };
      
      state.past.push(state.present);
      state.present = newPresent;
      state.future = [];
    },
    
    selectNode: (state, action: PayloadAction<string>) => {
      state.present.selectedNode = action.payload;
    },
    
    undo: (state) => {
      if (state.past.length === 0) return;
      
      const previous = state.past[state.past.length - 1];
      const newPast = state.past.slice(0, -1);
      
      state.future.unshift(state.present);
      state.present = previous;
      state.past = newPast;
    },
    
    redo: (state) => {
      if (state.future.length === 0) return;
      
      const next = state.future[0];
      const newFuture = state.future.slice(1);
      
      state.past.push(state.present);
      state.present = next;
      state.future = newFuture;
    },
  },
});

export const {
  updateNodeColor,
  updateNodeFontSize,
  updateNodePosition,
  selectNode,
  undo,
  redo,
} = graphSlice.actions;

export default graphSlice.reducer;