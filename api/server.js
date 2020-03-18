const express = require('express');

// router here
const DealerRouter = require('../dealer/dealer-router');

const server = express();

server.use(express.json());

// server.use(endpoint, router here);
server.use('/api/dealer', DealerRouter);

module.exports = server;
