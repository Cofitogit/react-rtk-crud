import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { TaskForm } from './components/TaskForm';
import { TasksList } from './components/TasksList';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TasksList />} />
          <Route path='/create-task' element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
