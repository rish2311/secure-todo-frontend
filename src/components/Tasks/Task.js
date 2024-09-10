import React from "react";
import { updateTask, deleteTask } from "../../services/api"; // Assuming these functions are in localStorageHelpers.js

const Task = ({ task, category, onUpdateTaskList }) => {
  // Handle task status change
  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    updateTask(task.id, { ...task, status: newStatus }, category); // Update the task status in localStorage
    onUpdateTaskList(); // Refresh the task list after updating
  };

  // Handle task deletion
  const handleDeleteTask = () => {
    deleteTask(task.id, category); // Delete the task from localStorage
    onUpdateTaskList(); // Refresh the task list after deletion
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <select value={task.status} onChange={handleStatusChange}>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button onClick={handleDeleteTask}>Delete</button>
    </div>
  );
};

export default Task;
