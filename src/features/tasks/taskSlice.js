import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: 'Titulo de la tarea',
    description: 'Descripción de la tarea a realizar, fechas, precios, etc.',
    completed: false,
  },
  {
    id: '2',
    title: 'Parchar la goma',
    description: 'Antes del viaje del xx/xx/xxxx.',
    completed: false,
  },
  {
    id: '3',
    title: 'Reparar telefono',
    description: 'Consultar precios para reemplazo de display en xiaomi redmi note 10.',
    completed: false,
  },
  {
    id: '4',
    title: 'Comprar pintura',
    description:
      'Averiguar mejor combinación de colores para la cocina y precios.',
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;
      const foundTask = state.find((task) => task.id === id);
      if (foundTask) {
        foundTask.title = title;
        foundTask.description = description;
      }
    },
    deleteTask: (state, action) => {
      const taskFound = state.find((task) => task.id === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },
  },
});

export const { addTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
