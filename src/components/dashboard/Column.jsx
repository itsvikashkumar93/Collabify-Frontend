import React from "react";
import Task from "./Task";
import { useDroppable } from "@dnd-kit/core";

const Column = ({ column, tasks }) => {
  const { setNodeRef } = useDroppable({ id: column.status });
  return (
    <div ref={setNodeRef} className="w-1/3 p-5 rounded-md bg-zinc-300 select-none">
      <h1 className="text-2xl font-bold text-center mb-4">{column.title}</h1>
      <div className="flex flex-col gap-4">
        {tasks.map((task, i) => (
          <Task key={i} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Column;
