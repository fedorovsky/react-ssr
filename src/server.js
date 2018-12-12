import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import path from 'path';
import { Provider as ReduxProvider } from 'react-redux';
import createStore from './redux';

import { StaticRouter } from 'react-router-dom';
import { matchRoutes, renderRoutes } from 'react-router-config';
import routes from './routes';

import App from './components/App';

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/*', (req, res) => {
  const branch = matchRoutes(routes, req.url);
  const promises = branch.map(({ route }) => {
    let fetchData = route.component.fetchData;
    return fetchData instanceof Function
      ? fetchData(store)
      : Promise.resolve(null);
  });

  const store = createStore();
  const reduxState = store.getState();

  return Promise.all(promises).then(data => {
    let context = {};
    const appString = renderToString(
      <ReduxProvider store={store}>
        <StaticRouter context={context} location={req.url}>
          {renderRoutes(routes)}
        </StaticRouter>
      </ReduxProvider>,
    );
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(
      template({
        title: 'React SSR',
        body: appString,
        reduxState: reduxState,
      }),
    );
  });
});

app.listen(2048);

function template({ body, title, reduxState }) {
  return `
        <!DOCTYPE html>
        <html>
          <head>
              <meta charset="utf-8">
              <title>${title}</title>
          </head>
          <body>
              <div id="app">${body}</div>
          </body>
          <script>
              window.REDUX_DATA = ${JSON.stringify(reduxState)}
          </script>
          <script src="./app.bundle.js"></script>
        </html>
    `;
}
