const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const httpLogger = require('./api/middlewares/http-logger');

// routes
const azsRoutes = require('./api/routes/azs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(httpLogger);

app.use('/api', azsRoutes);

// handle 404
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.httpCode = 404;
  next(err);
});

// handle errors
app.use((err, req, res, next) => {
  res.status(err.httpCode);
  res.json({ errors: { message: err.message } });
});

module.exports = app;
