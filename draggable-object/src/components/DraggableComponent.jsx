import React from "react";
import { useDrag } from "react-dnd";

const DraggableComponent = ({ id, name }) => {
  const [{ isDragging }, drag, dragPreview] = useDrag({
    type: "Box",
    item: {
      name: name,
      id: id,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {name}
    </div>
  );
};

export default DraggableComponent;
