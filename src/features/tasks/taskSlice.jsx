import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks, addTaskAsync, deleteTaskAsync, updateTaskAsync } from './taskThunks';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    status: 'idle',
  },
  reducers: {
    toggleTaskStatus: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.status = 'succeeded';
      })
      .addCase(addTaskAsync.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(deleteTaskAsync.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(task => task.id !== action.payload);
      })
      .addCase(updateTaskAsync.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(task => task.id === action.payload.id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      });
  }
});

export const { toggleTaskStatus } = taskSlice.actions;

export default taskSlice.reducer;
