const { logsLevel } = require('../config');
const { createLogger, format, transports } = require('winston');

const { combine, timestamp, printf } = format;
const myFormat = printf(({ level, message, timestamp }) => `${timestamp} ${level}: ${message}`);

const logger = createLogger({
  level: logsLevel,
  defaultMeta: { service: 'azs-service' },
  format: combine(
    timestamp(),
    myFormat,
  ),
  // dev mode
  transports: [new transports.Console()],
});

module.exports = logger;
