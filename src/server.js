import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import path from 'path';
import { Provider as ReduxProvider } from 'react-redux';
import logger from 'morgan';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes, renderRoutes } from 'react-router-config';
import { ServerStyleSheet } from 'styled-components';
import createStore from './redux';
import routes from './routes';

const app = express();

app.use(logger('dev'));
app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/*', (req, res) => {
  const branch = matchRoutes(routes, req.url);
  const store = createStore();
  const sheet = new ServerStyleSheet();

  const promises = branch.map(({ route }) => {
    let fetchData = route.component.fetchData;
    return fetchData instanceof Function
      ? fetchData(store)
      : Promise.resolve(null);
  });

  return Promise.all(promises).then(data => {
    let context = {};

    const appString = renderToString(
      sheet.collectStyles(
        <ReduxProvider store={store}>
          <StaticRouter context={context} location={req.url}>
            {renderRoutes(routes)}
          </StaticRouter>
        </ReduxProvider>,
      ),
    );

    if (context.status === 404) {
      res.status(404);
    }
    if (context.status === 302) {
      return res.redirect(302, context.url);
    }

    res.end(
      template({
        title: 'React SSR',
        body: appString,
        styles: sheet.getStyleTags(),
        reduxState: store.getState(),
      }),
    );
  });
});

app.listen(process.env.PORT || 2048);

function template({ body, title, reduxState, styles }) {
  return `
        <!DOCTYPE html>
        <html>
          <head>
              <meta charset="utf-8">
              <title>${title}</title>
              ${styles}
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
