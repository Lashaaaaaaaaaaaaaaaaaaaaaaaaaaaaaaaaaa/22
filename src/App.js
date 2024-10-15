import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from './features/tasks/taskThunks';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import { toggleTheme } from './features/theme/themeSlice';

function App() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <button onClick={() => dispatch(toggleTheme())}>
        Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
