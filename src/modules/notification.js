import { createSelector } from 'reselect';

/**
 * Constants
 * */
export const moduleName = 'notification';
const prefix = `@ssr/${moduleName}`;
export const ADD_MESSAGE = `${prefix}/message/add`;

/**
 * Reducer
 * */
const initialState = {
  message: 'Hello Redux Ducks',
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_MESSAGE:
      return {
        ...state,
        message: payload.message,
      };
    default:
      return state;
  }
}

/**
 * Selectors
 * */
export const stateSelector = state => state[moduleName];
export const messageSelector = createSelector(
  stateSelector,
  state => state.message,
);

/**
 * Action Creators
 * */
export const addMessage = message => ({
  type: ADD_MESSAGE,
  payload: { message },
});
