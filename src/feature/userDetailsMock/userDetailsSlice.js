import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const createUser = createAsyncThunk(
  'createUser',
  async (data, {rejectWithValue}) => {
    const response = await fetch(
      'https://673b228a339a4ce4451ac8b2.mockapi.io/gopi/api/AddNameNumber',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/jon',
        },
        body: JSON.stringify(data),
      },
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      console.log('error', error);
      return rejectWithValue(error);
    }
  },
);

const userDetails = createSlice({
  name: 'userDetails',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      (state.loading = false), state.users.push(action.payload);
    }),
      builder.addCase(createUser.rejected, state => {
        (state.loading = false), (state.error = false);
      });
    builder.addCase(createUser.pending, state => {
      state.loading = true;
    });
  },
});

export default userDetails.reducer;
