import { v4 as uuidv4 } from "uuid";

const localStorageData = {
  email: "",
  password: "",
  isLoggedIn: false,
  username: "",
  tasks: {
    id: uuidv4(),
    pending: [],
    inProgress: [],
    completed: [],
  },
};

// Function to login the user
export const loginUser = (data) => {
  const { email, password } = data;
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  localStorage.setItem("isLoggedIn", true);

  // Check if tasks already exist for this user, otherwise set up a new task structure
  if (!localStorage.getItem("tasks")) {
    localStorage.setItem("tasks", JSON.stringify(localStorageData.tasks));
  }
};

// Function to register a new user
export const registerUser = (data) => {
  const { email, password } = data;
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  localStorage.setItem("username", data.username);
  localStorage.setItem("tasks", JSON.stringify(localStorageData.tasks));
};

// Function to fetch tasks from localStorage
export const fetchTasks = () => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : localStorageData.tasks;
};

// Function to add a task
export const addTask = (task, category = "pending") => {
  const tasks = fetchTasks();
  tasks[category].push({ id: uuidv4(), ...task });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  return tasks;
};

// Function to update a task
export const updateTask = (id, updatedTask, category) => {
  const tasks = fetchTasks();
  tasks[category] = tasks[category]?.map((task) =>
    task.id === id ? { ...task, ...updatedTask } : task,
  );
  localStorage.setItem("tasks", JSON.stringify(tasks));
  return tasks;
};

// Function to delete a task
export const deleteTask = (id, category) => {
  const tasks = fetchTasks();
  tasks[category] = tasks[category].filter((task) => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  return tasks;
};
