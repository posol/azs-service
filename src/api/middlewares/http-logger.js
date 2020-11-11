const logger = require('../../utils/logger');
/**
 * middleware for http requests logging
 * @param req
 * @param res
 * @param next
 */
module.exports = (req, res, next) => {
  logger.info(`method: ${req.method}, url: ${req.url}, params: ${JSON.stringify(req.params, '', 4)}, originalUrl: ${req.originalUrl}, body: ${JSON.stringify(req.body, '', 4)}`,
    req.method, req.url, JSON.stringify(req.params, '', 4), req.originalUrl, JSON.stringify(req.body, '', 4));
  next();
};
