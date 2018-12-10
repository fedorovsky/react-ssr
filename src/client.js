import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.hydrate(
  <div>
    <App />
  </div>,
  document.getElementById('app'),
);
