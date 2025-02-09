# Interactive Graph Visualization

A React-based interactive graph visualization tool that lets you manipulate and customize nodes with full undo/redo support. Built with React Flow and Redux for robust state management.

## Features

- **Interactive Graph Layout**
  - 10 interconnected nodes in a circular layout
  - Drag nodes to reposition them
  - Smooth animations and transitions
  - Responsive design that adapts to your screen

- **Node Customization**
  - Change node colors with a color picker
  - Adjust font sizes (12px - 24px)
  - Changes are reflected in real-time

- **History Management**
  - Undo/redo support for all modifications
  - Tracks color changes, font size adjustments, and node positions
  - Intuitive controls with keyboard shortcuts (coming soon)

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone [your-repo-url]
   cd [your-repo-name]
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The app will open in your default browser at `http://localhost:5173`.

## How to Use

1. **Node Selection**
   - Click any node to select it
   - Selected nodes show a blue highlight ring

2. **Customizing Nodes**
   - Use the color picker in the left panel to change node colors
   - Adjust the font size slider (12px - 24px)
   - Changes are applied immediately to the selected node

3. **Moving Nodes**
   - Click and drag any node to reposition it
   - The graph will maintain connections between nodes

4. **Undo/Redo**
   - Click the undo button (or press Ctrl+Z) to revert changes
   - Click the redo button (or press Ctrl+Y) to restore changes
   - History tracks all node modifications

## Tech Stack

- React 18
- TypeScript
- Redux Toolkit for state management
- React Flow for graph visualization
- Tailwind CSS for styling
- Lucide React for icons



##Need to add these Future Improvements:

- [ ] Add keyboard shortcuts for undo/redo
- [ ] Implement edge customization
- [ ] Add node labels editing
- [ ] Support for different graph layouts
- [ ] Export/import graph configurations
- [ ] Add more node styling options



## Acknowledgments

- Built with [React Flow]
- Icons from [Lucide React]
- Styling with [Tailwind CSS]



Project Link: [https://github.com/yourusername/your-repo-name](https://github.com/yourusername/your-repo-name)