import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';
import {Link} from 'react-router-dom'

export function TasksList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch()

  const handleDelete = (getId) => {
    dispatch(deleteTask(getId))
  };

  return (
    <div>

      <header>
        <h2>Tasks {tasks.length}</h2>
        <Link to='/create-task'>Create task</Link>
      </header>

      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
