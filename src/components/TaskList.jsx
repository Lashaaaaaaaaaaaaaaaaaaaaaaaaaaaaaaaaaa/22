import { useDispatch, useSelector } from 'react-redux';
import { toggleTaskStatus } from '../features/tasks/taskSlice';
import { deleteTaskAsync } from '../features/tasks/taskThunks';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch(deleteTaskAsync(taskId));
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span>{task.name} - {task.assignee} - {task.deadline}</span>
          <input
            type="checkbox"
            checked={task.isCompleted}
            onChange={() => dispatch(toggleTaskStatus(task.id))}
          />
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
