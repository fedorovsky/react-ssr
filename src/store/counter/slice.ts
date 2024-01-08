import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const _SLICE_NAME_ = 'counter';

export interface Counter {
  value: number;
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
    setValue(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
  },
});
export const { reducer, actions } = slice;
