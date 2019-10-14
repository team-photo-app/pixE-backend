'use strict';

module.exports = (error, request, response) => {
  console.log('__SERVER__ERROR__', error);
  let serverError = { error: error.message || error };
  response.status(500).json(serverError);
};
