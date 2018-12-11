import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

export default (initialState = {}) => {
  return createStore(reducer, initialState, composeWithDevTools());
};
