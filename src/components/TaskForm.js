import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../features/tasks/taskSlice';
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';

export function TaskForm() {
  const [task, setTask] = useState({
    title: '',
    description: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(editTask(task));
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }
    navigate('/');
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params.id, tasks]);

  return (
    <form onSubmit={handleSubmit} className='d-grid p-4 justify-content-center'>
      <div className='d-grid bg-black bg-gradient p-2 rounded'>
        <h1 className='text-center'>Task details</h1>
        <label htmlFor='title'>Title:</label>
        <input
          className='rounded text-sm font-bold'
          name='title'
          type='text'
          placeholder='title'
          onChange={handleChange}
          value={task.title}
        />
        <label htmlFor='description'>Description:</label>
        <textarea
          className='rounded'
          name='description'
          placeholder='description'
          onChange={handleChange}
          value={task.description}
        ></textarea>
        <button className='btn btn-success mt-3'>
          Save
        </button>
      </div>
    </form>
  );
}
