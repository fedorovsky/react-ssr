import { combineReducers } from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice';

export default combineReducers({
  users: usersReducer,
});
