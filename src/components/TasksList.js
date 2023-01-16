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
        <h2 className='text-white fw-light bg-success rounded p-1'>
          Tasks APP
        </h2>
        <Link
          type='button'
          className='bg-success px-3 text-decoration-none text-white fs-3 rounded mb-2'
          to='/create-task'
        >
          +
        </Link>
      </header>
      <div className={styles.grid}>
        {tasks.map((task) => (
          <div className={styles.taskCard}>
            <div
              key={task.id}
              className='bg-black mb-3 rounded p-2 h-100 d-grid align-content-between'
            >
              <h4 className='card-title text-uppercase text-center text-success border-bottom border-secondary pb-1 fw-bolder fs-6'>
                {task.title}
              </h4>
              <p className='card-text text-center fw-normal text-break'>
                {task.description}
              </p>
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
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
