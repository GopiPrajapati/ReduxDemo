import {configureStore} from '@reduxjs/toolkit';
import gitUser from '../feature/github/githubUserSlice';
import userDetails from '../feature/userDetailsMock/userDetailsSlice';

export const store = configureStore({
  reducer: {
    gitHubReducer: gitUser,
    userDetails: userDetails,
  },
});
