import { createAsyncThunk } from '@reduxjs/toolkit';

// Fetch tasks
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await fetch('/api/tasks');
  const data = await response.json();
  return data;
});

// Add a new task
export const addTaskAsync = createAsyncThunk('tasks/addTask', async (newTask) => {
  const response = await fetch('/api/tasks', {
    method: 'POST',
    body: JSON.stringify(newTask),
    headers: { 'Content-Type': 'application/json' },
  });
  return await response.json();
});

// Delete a task
export const deleteTaskAsync = createAsyncThunk('tasks/deleteTask', async (taskId) => {
  await fetch(`/api/tasks/${taskId}`, { method: 'DELETE' });
  return taskId;
});

// Update a task
export const updateTaskAsync = createAsyncThunk('tasks/updateTask', async (updatedTask) => {
  const response = await fetch(`/api/tasks/${updatedTask.id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedTask),
    headers: { 'Content-Type': 'application/json' },
  });
  return await response.json();
});
