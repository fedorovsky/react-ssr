import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

export const initStore = (preloadedState?: any) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

type Store = ReturnType<typeof initStore>;

export type RootState = ReturnType<Store['getState']>;

export type AppDispatch = Store['dispatch'];
