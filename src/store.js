import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './features/tasks/taskSlice';
import themeReducer from './features/theme/themeSlice';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    theme: themeReducer,
  },
});

export default store;
