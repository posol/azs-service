const axios = require('axios');
const { promisify } = require('util');
const wait = promisify(setTimeout);
const AppError = require('./error.js');
const logger = require('./logger');
const { httpTimeOut } = require('../config');

// FIXME если успею абстрагировать хттп метод и доп опции
async function requestWithRetry(url, maxRetries, delay) {
  logger.info(`http get on url ${url}`);
  let lastError = {};
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await axios.get(url, { timeout: httpTimeOut });
      return response.data;
    } catch (err) {
      lastError = err;
      logger.info(`request was failed, Waiting ${delay} ms`);
      await wait(delay);
      logger.info(`Retrying № ${i + 1} after error '${err.message}'`);
    }
  }
  throw new AppError(lastError.message, lastError.response ? lastError.response.status : 500);
}
module.exports.requestWithRetry = requestWithRetry;
