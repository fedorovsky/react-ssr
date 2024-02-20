import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiService } from 'store/api/apiService';
import rootReducer from './rootReducer';

export const initStore = (preloadedState?: any) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiService.middleware),
    devTools: true,
  });

  setupListeners(store.dispatch);

  return store;
};

type Store = ReturnType<typeof initStore>;

export type RootState = ReturnType<Store['getState']>;

export type AppDispatch = Store['dispatch'];
