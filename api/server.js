const express = require('express');

// router here

const server = express();

server.use(express.json());

// server.use(endpoint, router here);

module.exports = server;
