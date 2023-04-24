import { combineReducers } from '@reduxjs/toolkit';
import usersReducer from './users/slice';
import { counterReducer } from './counter';

export default combineReducers({
  users: usersReducer,
  counter: counterReducer,
});
