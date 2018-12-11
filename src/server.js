import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import path from 'path';
import App from './components/App';

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/*', (req, res) => {
  const appString = renderToString(<App />);
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(
    template({
      title: 'React SSR',
      body: appString,
    }),
  );
});

app.listen(2048);

function template({ body, title }) {
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

          <script src="./app.bundle.js"></script>
        </html>
    `;
}
