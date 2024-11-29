import React, { useState, useEffect, useCallback } from "react";
import { DndContext } from "@dnd-kit/core";
import Column from "./Column";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import AddTask from "./AddTask";
import {
  asyncGetTasks,
  asyncUpdateTask,
  asyncAddTask,
} from "../../store/actions/KanbanActions";
const KanbanBoard = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.kanbanReducer);

  const [showModal, setShowModal] = useState(false);

  const columns = [
    { status: "To-Do", title: "To Do" },
    { status: "In-Progress", title: "In Progress" },
    { status: "Done", title: "Done" },
  ];

  const getTasks = useCallback(async () => {
    try {
      await dispatch(asyncGetTasks());
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
      toast.error("Failed to load tasks. Retrying...");
      setTimeout(getTasks, 3000); // Retry mechanism
    }
  }, [dispatch]);

  const handleAddTask = (taskData) => {
    dispatch(asyncAddTask(taskData));
  };

  const handleDragEnd = (e) => {
    const { active, over } = e;

    if (!over) return;
    const taskId = active.id;
    const newStatus = over.id;
    dispatch(asyncUpdateTask(taskId, newStatus));
  };
  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <div className="h-full w-full rounded-md p-5 shadow-xl relative">
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded absolute bottom-5 right-5 shadow-md"
        onClick={() => setShowModal(true)}
      >
        Add New Task
      </button>

      <AddTask
        showModal={showModal}
        setShowModal={setShowModal}
        handleAddTask={handleAddTask}
      />

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
