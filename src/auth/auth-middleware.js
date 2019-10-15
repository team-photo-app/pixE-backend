'use strict';

const User = require('./user-models.js');

module.exports = (request, response, next) => {

  try {
    let [authType, authString] = request.headers.authorization.split(/\s+/);
    switch (authType.toLowerCase()) {
    case 'basic':
      return _authBasic(authString);
    case 'bearer':
      return _authBearer(authString);
    default:
      return _authError();
    }
  }
  catch(error){
    next(error);
  }

  function _authBasic(string) {
    let base64Buffer = Buffer.from(string, 'base64');
    let bufferString = base64Buffer.toString();
    let [username, password] = bufferString.split(':');
    let auth = {username, password};

    return User.authenticateBasic(auth)
      .then(user => _authenticate(user))
      .catch(next);
  }

  function _authBearer(authString){
    User.authenticateToken(authString)
      .then((user) => _authenticate(user) )
      .catch(next);
  }

  function _authenticate(user) {

    if(user) {
      request.user = user;
      request.token = user.generateToken();
      next();
    }
    else {
      _authError();
    }
  }

  function _authError() {
    next('User ID or Password is Incorrect');
  }
};
