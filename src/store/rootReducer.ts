import { combineReducers } from '@reduxjs/toolkit';
import * as usersModule from './users';
import * as counterModule from './counter';
import { apiService } from './api/apiService';

export default combineReducers({
  [apiService.reducerPath]: apiService.reducer,
  users: usersModule.reducer,
  counter: counterModule.reducer,
});
