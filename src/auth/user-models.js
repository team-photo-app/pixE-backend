'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

const users = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true, unique: true},
  //events they have access to as a guest
  events: {type: String, unique: true},
  //events they are the owner/admin of
  myEvents: {type: String, unique: true},
  token: {type: String, unique: true, required: true}
});

users.pre('save', function(next) {
  bcrypt.hash(this.password, 10)
    .then(hashedPassword => {
      this.password = hashedPassword;
      next();
    })
    .catch(console.error);
});

users.statics.authBasic = function(auth) {
  let query = {username: auth.username};
  return this.findOne(query)
    .then(user => user && user.comparePassword(auth.password))
    .catch(error => {throw error;});
};

users.statics.authToken = function(token) {
  try {
    let parsedToken = jwt.verify(token, SECRET);
    let query = {_id: parsedToken.id};
    return this.findOne(query);
  }
  catch (error) {
    throw new Error('Token is Invalid :(');
  }
};

users.methods.comparePassword = function(password){
  return bcrypt.compare(password, this.password)
    .then(valid => valid ? this : null);
};

users.methods.generateToken = function (type) {
  let token = {
    id: this._id,
    type: type || 'regular',
  };
  return jwt.sign(token, SECRET);
};

module.exports = mongoose.model('users', users);
