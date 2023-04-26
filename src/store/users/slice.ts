import { createSlice } from '@reduxjs/toolkit';
import { fetchUserList } from './thunkActions';
import { _SLICE_NAME_ } from './constants';

export interface User {
  id: number;
  name: string;
  username: string;
}

export interface Users {
  readonly list: User[];
  readonly status: 'idle' | 'loading' | 'succeeded' | 'failed';
  readonly error: string | null;
}

const initialState: Users = {
  list: [],
  status: 'idle',
  error: null,
};

const slice = createSlice({
  name: _SLICE_NAME_,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
        state.error = null;
      })
      .addCase(fetchUserList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export const { reducer, actions } = slice;
