import { createSlice } from '@reduxjs/toolkit';
import { _SLICE_NAME_ } from './constants';

export interface User {
  id: number;
  name: string;
  username: string;
}

export interface Users {}

const initialState: Users = {};

const slice = createSlice({
  name: _SLICE_NAME_,
  initialState,
  reducers: {},
});

export const { reducer } = slice;
