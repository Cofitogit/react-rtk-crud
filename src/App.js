import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { TaskForm } from './components/TaskForm';
import { TasksList } from './components/TasksList';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className='p-4'>
      <div className='text-white rounded border bg-secondary' style={{"--bs-bg-opacity": ".3"}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TasksList />} />
            <Route path='/create-task' element={<TaskForm />} />
            <Route path='/edit-task/:id' element={<TaskForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
