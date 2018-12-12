import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import createStore from './redux';
import routes from './routes';

import App from './components/App';

const store = createStore(window.REDUX_DATA);
window.store = store;

ReactDOM.hydrate(
  <ReduxProvider store={store}>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  </ReduxProvider>,
  document.getElementById('app'),
);
