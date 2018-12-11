import { createStore, combineReducers } from 'redux';

const initialState = {
  message: 'Hello Redux',
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIALIZE_SESSION':
      return true;
    default:
      return state;
  }
};

const reducer = combineReducers({
  session: sessionReducer,
});

export default initialState => createStore(reducer, initialState);
