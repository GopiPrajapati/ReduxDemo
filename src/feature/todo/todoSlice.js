import {createAsyncThunk, createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
  todos: [{id: 1, title: 'Hello World'}],
};

export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  return response.json();
});

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {id: nanoid(), title: action.payload};
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      console.log('API called and Data is Here ==>>>', action);
      state.todos = action.payload;
    });

    builder.addCase(fetchTodos.rejected, (state, action) => {
      console.log('Error while calling the APi:-', action.payload);
    });

    builder.addCase(fetchTodos.pending, (state, action) => {
      console.log('API calling is still going on');
    });
  },
});

export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;
