const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const Routes = require('./routes/route')
server.use('/', Routes)

module.exports = server
