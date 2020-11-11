const logger = require('../../utils/logger');
/**
 * middleware for http requests logging
 * @param req
 * @param res
 * @param next
 */
module.exports = (req, res, next) => {
  logger.info('method: %s, url: %s, params: %s, originalUrl: %s, body: %s',
    req.method, req.url, JSON.stringify(req.params, '', 4), req.originalUrl, JSON.stringify(req.body, '', 4));
  next();
};
