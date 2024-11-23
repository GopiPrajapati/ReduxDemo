import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

// API Calling using fetch

// export const createUser = createAsyncThunk(
//   'createUser',
//   async (data, {rejectWithValue}) => {
//     const response = await fetch(
//       'https://673b228a339a4ce4451ac8b2.mockapi.io/gopi/api/AddNameNumber',
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       },
//     );

//     try {
//       const result = await response.json();
//       console.log('result', result);
//       return result;
//     } catch (error) {
//       console.log('error', error);
//       return rejectWithValue(error);
//     }
//   },
// );

// API Calling using Axios

const httpClient = axios.create({
  baseURL: 'https://673b228a339a4ce4451ac8b2.mockapi.io/gopi/api/',
});

export const createUser = createAsyncThunk(
  'createUser',
  async (data, {rejectWithValue}) => {
    try {
      const response = await httpClient({
        url: 'https://673b228a339a4ce4451ac8b2.mockapi.io/gopi/api/AddNameNumber',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      });
      return response.data;
    } catch (error) {
      console.log('error', error);
      return rejectWithValue(error);
    }
  },
);

export const showUser = createAsyncThunk(
  'showUser',
  async (data, {rejectWithValue}) => {
    const response = await fetch(
      'https://673b228a339a4ce4451ac8b2.mockapi.io/gopi/api/AddNameNumber',
      {
        method: 'GET',
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
    name: undefined,
    number: undefined,
  },
  reducers: {
    addUserDetails: (state, action) => {
      state.name = action.payload;
    },
    addUserNumber: (state, action) => {
      state.number = action.payload;
    },
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
    builder.addCase(showUser.fulfilled, (state, action) => {
      (state.loading = false), (state.users = action.payload);
    }),
      builder.addCase(showUser.rejected, state => {
        (state.loading = false), (state.error = false);
      });
    builder.addCase(showUser.pending, state => {
      state.loading = true;
    });
  },
});

export const {addUserDetails, addUserNumber} = userDetails.actions;

export default userDetails.reducer;
