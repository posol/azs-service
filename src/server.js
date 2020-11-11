const http = require('http');
const app = require('./app');
const logger = require('./utils/logger');

const { port } = require('./config');

const server = http.createServer(app);

server.listen(port, () => logger.info(`Example app listening at http://localhost:${port}`));
