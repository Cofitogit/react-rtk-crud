import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { TaskForm } from './components/TaskForm';
import { TasksList } from './components/TasksList';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className='p-4'>
      <div className='text-white rounded-5 rounded-top border-top border-2 bg-dark bg-gradient' style={{"--bs-bg-opacity": ".6"}}>
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
