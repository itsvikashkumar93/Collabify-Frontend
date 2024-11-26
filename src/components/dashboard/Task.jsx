import { useDraggable } from "@dnd-kit/core";
import React from "react";

const Task = ({ task }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task._id,
  });
  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="w-full p-2 rounded-md bg-zinc-400"
    >
      <h1 className="text-xl font-semibold">{task.title}</h1>
      <p className="text-sm">{task.description}</p>
    </div>
  );
};

export default Task;
