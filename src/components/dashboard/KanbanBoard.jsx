import React, { useState, useEffect } from "react";
import { DndContext } from "@dnd-kit/core";
import axios from "../../utils/axios";
import Column from "./Column";
import { toast } from "react-toastify";
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

    const previousTasks = [...tasks];
    setTasks((prev) =>
      prev.map((task) =>
        task._id === taskId ? { ...task, status: newStatus } : task
      )
    );

    axios
      .put(`/tasks/${taskId}`, { status: newStatus })
      .then((res) => {
        toast.success("Task moved successfully");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to move task");
        setTasks(previousTasks);
      });
  };
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="h-full w-full rounded-md p-4 bg-gray-100 ">
      <div className="flex gap-10 w-full">
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
