import React, { useEffect, useState } from 'react';
import { fetchTasks, addTask, updateTask, deleteTask } from '../../api';
import Task from './Task';
import TaskForm from './TaskForm';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      const { data } = await fetchTasks();
      setTasks(data);
    };
    loadTasks();
  }, []);

  const handleAddTask = async (task) => {
    const { data } = await addTask(task);
    setTasks([...tasks, data]);
  };

  const handleUpdateTask = async (id, updatedTask) => {
    await updateTask(id, updatedTask);
    setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <TaskForm onAddTask={handleAddTask} />
      <div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onUpdateTask={handleUpdateTask}
            onDeleteTask={handleDeleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
