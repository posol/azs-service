const { stationsEndpoint, pricesEndpoint, httpRetryCount } = require('../config');
const { requestWithRetry } = require('../utils/http');

async function getStationsPrices() {
  const getStationsPromise = requestWithRetry(stationsEndpoint, httpRetryCount, 100);
  const getPricesPromise = requestWithRetry(pricesEndpoint, httpRetryCount, 100);
  const results = await Promise.all([getStationsPromise, getPricesPromise]);
  const stations = results[0];
  const prices = results[1];

  const stationsPrices = stations.map((station) => (
    {
      name: station.Name,
      adress: station.Address,
      products: prices.filter((price) => price.StationId === station.Id)
                      .map((price) => `${price.ProductId} ${price.Price}`)
                      .join(', '),
    }
  ));

  return stationsPrices;
}
module.exports.getStationsPrices = getStationsPrices;
