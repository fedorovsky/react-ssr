import 'isomorphic-fetch';
import { createSelector } from 'reselect';

/**
 * Constants
 * */
export const moduleName = 'users';
export const prefix = `@ssr/${moduleName}`;

export const USERS_LOADED = `${prefix}/users/loaded`;

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
export const stateSelector = state => state[moduleName];
export const userListSelector = createSelector(
  stateSelector,
  state => state.items,
);

/**
 * Action Creators
 * */
export const fetchUsers = () => dispatch => {
  return fetch('//jsonplaceholder.typicode.com/users')
    .then(res => {
      return res.json();
    })
    .then(users => {
      dispatch({
        type: USERS_LOADED,
        payload: { users },
      });
    });
};
