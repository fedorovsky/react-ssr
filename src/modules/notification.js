import { createSelector } from 'reselect';

/**
 * Constants
 * */
export const PREFIX = `@ssr`;
export const MODULE_NAME = 'notification';
export const ADD_MESSAGE = `${PREFIX}/${MODULE_NAME}/message/add`;

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
export const stateSelector = state => state[MODULE_NAME];
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
