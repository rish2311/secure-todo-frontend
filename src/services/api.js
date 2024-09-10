import axios from 'axios';

const API_URL = 'http://localhost/secure-todo-backend'; // Update with your backend URL

axios.defaults.withCredentials = true; // For handling cookies (sessions)

export const loginUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/auth.php?action=login`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Login failed. Please try again.');
  }
};

export const registerUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/auth.php?action=signup`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Registration failed. Please try again.');
  }
};

// CRUD Operations
export const fetchTasks = async () => {
  try {
    const response = await axios.get(`${API_URL}/tasks.php`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch tasks. Please try again.');
  }
};

export const addTask = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/tasks.php?action=add`, data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to add task. Please try again.');
  }
};

export const updateTask = async (id, data) => {
  try {
    const response = await axios.put(`${API_URL}/tasks.php?action=update&id=${id}`, data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update task. Please try again.');
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/tasks.php?action=delete&id=${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to delete task. Please try again.');
  }
};
