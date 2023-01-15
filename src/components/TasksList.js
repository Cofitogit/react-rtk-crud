import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';
import { Link } from 'react-router-dom';
import styles from './taskList.module.css';

export function TasksList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (getId) => {
    dispatch(deleteTask(getId));
  };

  return (
    <div className='p-4'>
      <header className='d-flex justify-content-between border-bottom border-white mb-3'>
        <h2 className='text-success fw-light'>Tasks APP</h2>
        <Link
          type='button'
          className='btn btn-success btn-sm rounded mb-3'
          to='/create-task'
        >
          New task
        </Link>
      </header>
      <div className={styles.grid}>
        {tasks.map((task) => (
          <div className={styles.taskCard}>
            <div
              key={task.id}
              className='card text-bg-light mb-3 rounded p-2'
            >
              <h3 className='card-title text-center border-bottom border-secondary'>
                {task.title}
              </h3>
              <p className='card-text'>{task.description}</p>
              <div className={styles.taskButton}>
                <div className='d-flex justify-content-end'>
                  <Link
                    className='btn btn-success btn-sm mx-2'
                    to={`/edit-task/${task.id}`}
                  >
                    edit
                  </Link>
                  <button
                    className='btn btn-danger btn-sm'
                    onClick={() => handleDelete(task.id)}
                  >X</button>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
