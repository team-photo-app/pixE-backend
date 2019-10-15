'use strict';
/**
 * Resource not Found
 * @param  {} request
 * @param  {} response
 * @param  {} next
 * @param  {'ResourceNotFound'};response.status(404} =>{leterror={error
 */
module.exports = (request, response, next) => {
  let error = { error: 'Resource Not Found' };
  response.status(404).json(error);
};
