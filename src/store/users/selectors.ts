import { RootState } from '../index';
import { createSelector } from 'reselect';
import { UsersState } from './slice';

export const stateSelector = (state: RootState): UsersState => state.users;
export const userListSelector = createSelector(
  stateSelector,
  (state) => state.list,
);

export const statusSelector = createSelector(
  stateSelector,
  (state) => state.status,
);
