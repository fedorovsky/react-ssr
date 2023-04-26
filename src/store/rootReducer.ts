import { combineReducers } from '@reduxjs/toolkit';
import * as usersModule from './users';
import * as counterModule from './counter';

export default combineReducers({
  users: usersModule.reducer,
  counter: counterModule.reducer,
});
