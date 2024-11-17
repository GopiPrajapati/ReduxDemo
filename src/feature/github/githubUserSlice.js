import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const getAllData = createAsyncThunk('gitUsers', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());
  // .then(res => console.log('res', res));

  // console.log('res', res);
  return res;
});

const gitUser = createSlice({
  name: 'githubUser',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder.addCase(getAllData.pending, state => {
      state.loading = true;
    }),
      builder.addCase(getAllData.rejected, (state, action) => {
        state.error = true;
        state.loading = false;
      }),
      builder.addCase(getAllData.fulfilled, (state, action) => {
        (state.users = action.payload), (state.loading = false);
      });
  },
});

export default gitUser.reducer;
