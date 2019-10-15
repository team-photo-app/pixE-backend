'use strict';

const dotenv = require('dotenv').config();
const express = require('express');
const server = express();

const app = require('./src/app.js');


const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server Running on port: ${PORT}`);
});
