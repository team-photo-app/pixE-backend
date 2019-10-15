'use strict';

const express = require('express');
const pixeRouter = express.Router;

const User = require('./user-models');
const auth = require('./auth-middleware');
const Pictures = require('../schema/picture-schema');
const Events = require('../schema/event-schema');
const s3 = require('../s3/upload')

// /signup
pixieRouter.post('/signup', auth, (request,response,next) => {
  const user = new User(request.body);
  user.save()
    .then((user) => {
      request.token = user.generateToken();
      request.user = user;
      response.set('token', request.token);
      response.cookie('auth', request.token);
      response.send(request.token);
    })
    .catch(next);
});

// /signin
pixeRouter.post('/signin', auth, (request, response, next) => {
  response.cookie('auth', request.token);
  response.send(request.token);
});

// /signout
pixeRouter.

// /create-event
  pixieRouter.post('/create-event', (request, response, next) => {
    const newEvent = new Events(request.body);
    response.status(200).send(newEvent);
  });

// /get-events
pixeRouter.get('/get-events', (request, response) => {
  response.send(Events);
});

// /post-pictures
pixeRouter.post('/post-picture', (request, response, next) => {
  const newPicture = new Pictures(request.body);
  response.status(200).send(newPicture);
});

// /get-pictures
pixeRouter.get('/get-pictures', (request, response) );

module.exports = pixeRouter;
