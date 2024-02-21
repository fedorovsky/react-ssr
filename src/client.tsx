import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only';
import * as React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { initStore } from './store';

import App from './App';

const store = initStore(window.REDUX_DATA);

hydrateRoot(
  document.getElementById('app') as HTMLElement,
  <Provider store={store}>
    <App />
  </Provider>,
);
