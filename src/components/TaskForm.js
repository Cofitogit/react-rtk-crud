import { useState } from 'react';

export function TaskForm() {
  const [task, setTask] = useState({
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
  };

  return (
    <form>
      <input
        name='title'
        type='text'
        placeholder='title'
        onChange={handleChange}
      />

      <textarea
        name='description'
        placeholder='description'
        onChange={handleChange}
      ></textarea>

      <button>Save</button>
    </form>
  );
}
