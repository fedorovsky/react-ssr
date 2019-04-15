import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { Provider as ReduxProvider } from 'react-redux';
import logger from 'morgan';
import ip from 'ip';
import colors from 'colors';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes, renderRoutes } from 'react-router-config';
import { ServerStyleSheet } from 'styled-components';
import Helmet from 'react-helmet';
import createStore from './redux';
import routes from './routes';
import reload from 'reload';
import dotenv from 'dotenv';

/* process.env -> .env */
dotenv.config();

const app = express();

/* Live Reload Browser  */
if (process.env.NODE_ENV === 'development') {
  reload(app);
}

app.use(cors());
app.use(logger('dev'));
app.use(express.static(path.resolve('./dist')));
app.use('/public', express.static('./public'));

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

    if (context.statusCode === 404) {
      res.status(404);
    }
    if (context.statusCode === 302) {
      return res.redirect(302, context.url);
    }

    res.end(
      template({
        body: appString,
        styles: sheet.getStyleTags(),
        reduxState: store.getState(),
        helmetData: Helmet.renderStatic(),
      }),
    );
  });
});

app.listen(process.env.PORT, () => {
  console.log(
    colors.green(`[SERVER] [http://${ip.address()}:${process.env.PORT}]`),
  );
  console.log(colors.green(`[process.env.NODE_ENV] [${process.env.NODE_ENV}]`));
});

function template({ body, reduxState, helmetData, styles }) {
  return `
        <!DOCTYPE html>
        <html>
          <head>
              <meta charset="utf-8">
              <meta name="description" content="">
              <meta name="viewport" content="width=device-width, initial-scale=1">
              ${helmetData.title.toString()}
              ${helmetData.meta.toString()}
              ${styles}
              <link rel="stylesheet" href="/style.css">
          </head>
          <body>
              <div id="app">${body}</div>
          </body>
          <script>
              window.REDUX_DATA = ${JSON.stringify(reduxState)}
          </script>
          <script src="/app.bundle.js"></script>
          <script src="/reload/reload.js"></script>
        </html>
    `;
}
