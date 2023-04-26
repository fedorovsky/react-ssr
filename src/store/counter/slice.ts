import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const _SLICE_NAME_ = 'counter';

export interface Counter {
  readonly value: number;
}

const initialState: Counter = {
  value: 0,
};

const slice = createSlice({
  name: _SLICE_NAME_,
  initialState,
  reducers: {
    increase(state) {
      state.value += 1;
    },
    decrease(state) {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {},
});
export const { reducer, actions } = slice;
