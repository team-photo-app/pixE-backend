'use strict';

const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

const router = require('./routes/routes.js');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded());

app.use(router);

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
