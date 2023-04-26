import { RootState } from '../index';
import { createSelector } from 'reselect';

export const stateSelector = (state: RootState) => state.users;
export const userListSelector = createSelector(
  stateSelector,
  (state) => state.list,
);

export const statusSelector = createSelector(
  stateSelector,
  (state) => state.status,
);
