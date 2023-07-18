import React from "react";
import { useDrop } from "react-dnd";

const DroppableComponent = () => {
  const [{ isOver }, drop] = useDrop({
    accept: "Box",
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} style={{ backgroundColor: isOver ? "red" : "white" }}>
      Drop here
    </div>
  );
};

export default DroppableComponent;
