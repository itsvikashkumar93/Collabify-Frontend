import React, { useState, useEffect } from "react";
import { DndContext } from "@dnd-kit/core";
import axios from "../../utils/axios";
import Column from "./Column";
const KanbanBoard = () => {
  const [tasks, setTasks] = useState([]);

  const columns = [
    { status: "To-Do", title: "To Do" },
    { status: "In-Progress", title: "In Progress" },
    { status: "Done", title: "Done" },
  ];

  const getTasks = () => {
    axios
      .get("/tasks")
      .then((res) => {
        // console.log(res);
        setTasks(res.data);
      })
      .catch((err) => console.error(err));
  };

  const handleDragEnd = (e) => {
    const { active, over } = e;

    if (!over) return;
    const taskId = active.id;
    const newStatus = over.id;

    setTasks((prev) =>
      prev.map((task) =>
        task._id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="h-[90vh] w-full p-4 bg-zinc-300 flex flex-col gap-4">
      <div className="flex gap-10">
        <DndContext onDragEnd={handleDragEnd}>
          {columns.map((column, i) => (
            <Column
              key={i}
              column={column}
              tasks={tasks.filter((task) => task.status === column.status)}
            />
          ))}
        </DndContext>
      </div>
    </div>
  );
};

export default KanbanBoard;
