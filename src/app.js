'use strict';

const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

const errorHandler = require('./middleware/error.js');
const notFound = require('./middleware/404.js');

const router = require('./auth/routes/routes.js');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded());

app.use(router);

app.use('/*', notFound);
app.use(errorHandler);

// //TODO: REFACTOR TO INCLUDE DOTENV VARS
// module.exports = {
//   server : app,
//   start : ( port ) => {
//     app.listen( port, () => {
//       console.log('rockin n rollin on:', port);
//     });
//   },
// };

app.listen(8080, () => {
  console.log('Up : 8080');
});
