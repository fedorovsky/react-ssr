import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import fetchData from 'utils/fetchData';
import { RootState } from '../index';

const _SLICE_NAME_ = 'users';

export interface User {
  id: number;
  name: string;
  username: string;
}

export interface UsersState {
  readonly list: User[];
  readonly status: 'idle' | 'loading' | 'succeeded' | 'failed';
  readonly error: string | undefined;
}

const initialState: UsersState = {
  list: [],
  status: 'idle',
  error: undefined,
};


export const fetchUserList = createAsyncThunk(`${_SLICE_NAME_}/fetchAll`, async (params, thunkAPI) => {
  const response = await fetchData<User[]>(
      'https://jsonplaceholder.typicode.com/users',
  )
  return response;
});

const postsSlice = createSlice({
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
        state.error = undefined; // Reset error when fetch succeeds
      })
      .addCase(fetchUserList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const stateSelector = (state: RootState): UsersState => state.users;
export const userListSelector = createSelector(
  stateSelector,
  (state) => state.list,
);

export default postsSlice.reducer;
