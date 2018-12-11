import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import createStore from './redux';

import App from './components/App';

const store = createStore(window.REDUX_DATA);
window.store = store;

ReactDOM.hydrate(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById('app'),
);
