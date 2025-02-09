export interface Node {
  id: string;
  position: { x: number; y: number };
  data: {
    label: string;
    color: string;
    fontSize: number;
  };
  type?: string;
}

export interface Edge {
  id: string;
  source: string;
  target: string;
}

export interface GraphState {
  nodes: Node[];
  edges: Edge[];
  selectedNode: string | null;
}

export interface HistoryState {
  past: GraphState[];
  present: GraphState;
  future: GraphState[];
}

export type RootState = {
  graph: HistoryState;
}