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
      /* 
      1. Vanilla(older) Redux => DON'T MUTATE STATE, returning was mandatory
      We should not mutate state redux used to load about this on their website

      const newState = [...state]
      newState.items.push(action.payload)
      return newState

      Above line state that in older version
      
      2. Redux Toolkit
      We have to mutate the state

      Also react uses Immer Library to do this - so basically immer library is kind of finding between the original state the mutated state and then gives you back the new state which is immutable state which is new copy of a state,  
      Redux toolkit uses immer BTS (Behind the scene)

      state.items.push(action.payload)  // this is an impure function

      */

      /*
      RTK - either mutate the state or return the new State

      state.item.length = 0 // originalState = []
      return { item : [] }  

      */

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
