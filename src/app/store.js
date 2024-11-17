import {configureStore} from '@reduxjs/toolkit';
import gitUser from '../feature/github/githubUserSlice';

export const store = configureStore({
  reducer: {
    gitHubReducer: gitUser,
  },
});
