import 'isomorphic-fetch';
import { createSelector } from 'reselect';

/**
 * Constants
 * */
export const PREFIX = `@ssr`;
export const MODULE_NAME = 'users';
export const USERS_LOADED = `${PREFIX}/${MODULE_NAME}/users/loaded`;

/**
 * Reducer
 * */
const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USERS_LOADED:
      return {
        ...state,
        items: payload.users,
      };
    default:
      return state;
  }
};

/**
 * Selectors
 * */
export const stateSelector = state => state[MODULE_NAME];
export const userListSelector = createSelector(
  stateSelector,
  state => state.items,
);

/**
 * Action Creators
 * */
export const fetchUsers = () => dispatch => {
  return fetch('//jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
      dispatch({
        type: USERS_LOADED,
        payload: { users },
      });
    });
};
