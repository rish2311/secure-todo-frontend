import React, { useEffect, useState } from "react";
import { fetchTasks, addTask } from "../../services/api"; // Import your services
import TaskForm from "./TaskForm";
import Task from "./Task";

const Dashboard = () => {
  const [tasks, setTasks] = useState({
    pending: [],
    inProgress: [],
    completed: [],
  });

  useEffect(() => {
    loadTasks(); // Load tasks on component mount
  }, []);

  const loadTasks = () => {
    const storedTasks = fetchTasks(); // Fetch from localStorage
    setTasks(storedTasks); // Update state
  };

  const handleAddTask = (task) => {
    addTask(task); // Add new task
    loadTasks(); // Reload the task list
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <TaskForm onAddTask={handleAddTask} />
      <div>
        <h3>Pending Tasks</h3>
        {tasks.pending.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
      {/* You can render tasks from other categories similarly */}
    </div>
  );
};

export default Dashboard;
