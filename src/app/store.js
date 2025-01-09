import {configureStore} from '@reduxjs/toolkit';
import gitUser from '../feature/github/githubUserSlice';
import userDetails from '../feature/userDetailsMock/userDetailsSlice';
import {userData} from '../feature/RTK/apiSlice';

export const store = configureStore({
  reducer: {
    gitHubReducer: gitUser,
    userDetails: userDetails,
    [userData.reducerPath]: userData.reducer, // because of this I got access to the Data
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(userData.middleware),
});
