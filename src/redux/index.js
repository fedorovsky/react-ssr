import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducer';

const enhancer = applyMiddleware(thunk);

export default (initialState = {}) => {
  return createStore(reducer, initialState, composeWithDevTools(enhancer));
};
