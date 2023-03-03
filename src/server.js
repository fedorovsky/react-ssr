import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { Provider as ReduxProvider } from 'react-redux';
import logger from 'morgan';
import ip from 'ip';
import colors from 'colors';
import { ServerStyleSheet } from 'styled-components';
import Helmet from 'react-helmet';
import createStore from './redux';
import dotenv from 'dotenv';
import App from './App';

/* process.env -> .env */
dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

const app = express();

/* Logger morgan */
if (isDevelopment) {
  app.use(
    logger(
      ':method :url :status :response-time ms',
    ),
  );
}

/* CORS */
app.use(cors());

/* Static */
app.use(express.static(path.resolve('./dist')));
app.use('/public', express.static('./public'));

app.get('*', (req, res) => {
  const store = createStore();
  const sheet = new ServerStyleSheet();

  const appString = ReactDOMServer.renderToString(
    sheet.collectStyles(
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>,
    ),
  );

  res.end(
    template({
      body: appString,
      styles: sheet.getStyleTags(),
      reduxState: store.getState(),
      helmet: Helmet.renderStatic(),
    }),
  );
});

app.listen(process.env.PORT, () => {
  console.log(
    colors.green(`[SERVER] [http://${ip.address()}:${process.env.PORT}]`),
  );
  console.log(colors.green(`[NODE_ENV] [${process.env.NODE_ENV}]`));
});

function template({ body, reduxState, helmet, styles }) {
  return `
        <!DOCTYPE html>
        <html>
          <head>
              <meta charset="utf-8">
              <meta name="description" content="">
              <meta name="viewport" content="width=device-width, initial-scale=1">
              ${helmet.title.toString()}
              ${helmet.meta.toString()}
              ${styles}
          </head>
          <body>
              <div id="app">${body}</div>
          </body>
          <script>
              window.REDUX_DATA = ${JSON.stringify(reduxState)}
          </script>
          <script src="client.js"></script>
        </html>
    `;
}

// https://github.com/suhanw/blog-react-ssr
