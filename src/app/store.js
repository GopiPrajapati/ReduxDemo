import {configureStore} from '@reduxjs/toolkit';
import todoReducers from '../feature/todo/todoSlice';

export const store = configureStore({
  reducer: todoReducers,
});
