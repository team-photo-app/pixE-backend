'use strict';
/**
 * Server Error(Cant connect to server)
 * @param  {} error
 * @param  {} request
 * @param  {} response
 * @param  {} =>{console.log('__SERVER__ERROR__'
 * @param  {} error
 * @param  {error.message||error};response.status(500} ;letserverError={error
 */
module.exports = (error, request, response) => {
  console.log('__SERVER__ERROR__', error);
  let serverError = { error: error.message || error };
  response.status(500).json(serverError);
};
