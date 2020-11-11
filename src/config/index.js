// dev config
const envFound = require('dotenv').config({ path: './.env.default' });

if (envFound.error) {
  // This error should crash whole process
  throw new Error("Couldn't find .env file");
}

module.exports = {
  stationsEndpoint: `${process.env.BASE_API_URL}${process.env.STATIONS_API}${process.env.API_KEY}`,
  pricesEndpoint: `${process.env.BASE_API_URL}${process.env.PRICES_API}${process.env.API_KEY}`,
  port: process.env.PORT,
  httpTimeOut: process.env.HTTP_TIMEOUT,
  httpRetryCount: process.env.HTTP_RETRY_COUNT,
  logsLevel: process.env.LOGS_LEVEL,
};
