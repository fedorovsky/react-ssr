import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { ServerStyleSheet } from 'styled-components';
import Helmet from 'react-helmet';
import { initStore } from './store';
import express from 'express';
import App from './App';

const ip = require('ip');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');

/* process.env -> .env */
dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

const app = express();

/* Logger morgan */
if (isDevelopment) {
  app.use(logger(':method :url :status :response-time ms'));
}

/* CORS */
app.use(cors());

/* Static */
app.use(express.static(path.resolve('./dist')));
app.use('/public', express.static('./public'));

app.get('*', (req, res) => {
  const store = initStore();
  const sheet = new ServerStyleSheet();

  const appString = ReactDOMServer.renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <App />
      </Provider>,
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


type TemplateData = {
    body: string,
    reduxState: any,
    helmet: any,
    styles: string
}
function template({ body, reduxState, helmet, styles }: TemplateData) {
  return `
        <!DOCTYPE html>
        <html lang="en">
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
