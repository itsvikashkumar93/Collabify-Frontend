import axios from "../../utils/axios";
import { getTasks, updateTask, addTask } from "../reducers/KanbanReducer";
import { toast } from "react-toastify";
export const asyncGetTasks = () => (dispatch) => {
  try {
    axios.get("/tasks").then((res) => {
      dispatch(getTasks(res.data));
    });
  } catch (error) {
    console.log(error);
  }
};

export const asyncAddTask = (task) => (dispatch) => {
  try {
    console.log(task);
    axios.post("/tasks", task).then((res) => {
      dispatch(addTask(res.data));
      toast.success("Task added successfully");
    });
  } catch (error) {
    console.log(error);
    toast.error("Failed to add task");
  }
};

export const asyncUpdateTask = (taskId, newStatus) => (dispatch, getState) => {
  let previousTasks;
  try {
    previousTasks = getState().kanbanReducer.tasks;
    // console.log(previousTasks);
    dispatch(updateTask({ taskId, newStatus }));
    axios.put(`/tasks/${taskId}`, { status: newStatus });
    toast.success("Task moved successfully");
  } catch (error) {
    console.log(error);
    toast.error("Failed to move task");
    const task = previousTasks.find((task) => task._id === taskId);
    if (task) {
      dispatch(updateTask({ taskId, status: task.status }));
    }
  }
};

export const asyncDeleteTask = (taskId) => (dispatch) => {
  try {
    axios.delete(`/tasks/${taskId}`).then(() => {
      dispatch(deleteTask(taskId));
      toast.success("Task deleted successfully");
    });
  } catch (error) {
    console.log(error);
    toast.error("Failed to delete task");
  }
};
