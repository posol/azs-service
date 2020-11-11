const express = require('express');
const bodyParser = require('body-parser');
const azsService = require('./services/azs.js');
const httpLogger = require('./api/middlewares/http-logger');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(httpLogger);

// routes
app.get('/stations/prices', async (req, res, next) => {
  try {
    const data = await azsService.getStationsPrices();
    // print in table format
    console.table(data);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
});

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.httpCode = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.httpCode);
  res.json({ errors: { message: err.message } });
});

module.exports = app;
