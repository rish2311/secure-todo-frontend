import React, { useState } from "react";
import { addTask } from "../../services/api"; // Assuming addTask is in localStorageHelpers.js

const TaskForm = ({ onUpdateTaskList }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the new task to localStorage under the 'Pending' category
    addTask({ title, description, status: "Pending" });

    // Refresh the task list after adding a new task
    onUpdateTaskList();

    // Reset form fields
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
