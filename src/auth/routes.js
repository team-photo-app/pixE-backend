'use strict';

const express = require('express');
const pixieRouter = express.Router;

const User = require('./user-models');
const auth = require('./auth-middleware');

// /signup
pixieRouter.post('/signup', auth, (request,response,next) => {
  const user= new User(request.body);
  user.save()
    .then((user) => {
      request.token = user.generateToken();
      request.user = user;
      response.set('token', request.token);
      resopnse.cookie('auth', request.token);
      response.send(request.token);
    })
    .catch(next);
})
// /signin
pixieRouter.post('/signin', auth, (request, response, next) => {
  response.cookie('auth', request.token);
  response.send(request.token);
})
// /signout
pixieRouter.
// /create-event
pixieRouter.post('/create-event',)
// /get-events
pixieRouter.get('/get-events', )
// /post-pictures
pixieRouter.post('/post-picture', )
// /get-pictures
pixieRouter.get('/get-pictures', )

module.exports = pixeRouter;
