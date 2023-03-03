import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import createStore from './redux';

import App from './App';

const store = createStore(window.REDUX_DATA);
window.store = store;

ReactDOM.hydrateRoot(
  document.getElementById('app'),
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
);
