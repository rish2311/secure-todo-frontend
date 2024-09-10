import React from 'react';

const Task = ({ task, onUpdateTask, onDeleteTask }) => {
  const handleStatusChange = (e) => {
    onUpdateTask(task.id, { ...task, status: e.target.value });
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
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
