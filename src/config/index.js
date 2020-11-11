// dev config
const envFound = require('dotenv').config({ path: './.env.default' });

if (envFound.error) {
  // This error should crash whole process
  throw new Error("Couldn't find .env file");
}

module.exports = {
  azsListEndpoint: `${process.env.BASE_API_URL}${process.env.AZS_LIST_API}${process.env.API_KEY}`,
  pricesEndpoint: `${process.env.BASE_API_URL}${process.env.PRICES_API}${process.env.API_KEY}`,
  port: process.env.PORT,
};
