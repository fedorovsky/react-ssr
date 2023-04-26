import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchData from 'utils/fetchData';
import { _SLICE_NAME_ } from './constants';
import { User } from './slice';

export const fetchUserList = createAsyncThunk(
  `${_SLICE_NAME_}/fetchAll`,
  async (params, thunkAPI) => {
    const response = await fetchData<User[]>(
      'https://jsonplaceholder.typicode.com/users',
    );
    return response;
  },
);
