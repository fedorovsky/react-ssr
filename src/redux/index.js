import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

const enhancer = applyMiddleware();

export default (initialState = {}) => {
  return createStore(reducer, initialState, composeWithDevTools(enhancer));
};
