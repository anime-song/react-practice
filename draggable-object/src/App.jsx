import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableComponent from "./components/DraggableComponent";
import DroppableComponent from "./components/DroppableComponent";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <DraggableComponent id={1} name="Drag me" />
      <DroppableComponent />
    </DndProvider>
  );
}

export default App;
