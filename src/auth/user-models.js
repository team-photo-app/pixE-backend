'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

/** create new mongoose schema for users 
 * @username  {string, required, unique}
 * @password {string, requred, unique}
 * @events {string, unique} *all events the user is an invited member of
 * @myEvents {string, unique} *all events the user is an admin/owner of
 * @token {string, true, required}
 * @param  {true}} unique
 * 
 */
const users = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true, unique: true},
  //events they have access to as a guest
  events: {type: String, unique: true},
  //events they are the owner/admin of
  myEvents: {type: String, unique: true},
  token: {type: String, unique: true, required: true}
});

/** prehook to save the bcrypted/hashed password
 * @save  bcrypt hash 10 times
 * @hashedPassword compared to this.password
 * 
 */
users.pre('save', function(next) {
  bcrypt.hash(this.password, 10)
    .then(hashedPassword => {
      this.password = hashedPassword;
      next();
    })
    .catch(console.error);
});

/** basic auth, user and password, compare 
 * @auth compare entered user and pass to cached user and pass 
 * 
 */
users.statics.authBasic = function(auth) {
  let query = {username: auth.username};
  return this.findOne(query)
    .then(user => user && user.comparePassword(auth.password))
    .catch(error => {throw error;});
};

/**
 * @param  {} token
 * @param  {} {try{letparsedToken=jwt.verify(token
 * @param  {} SECRET
 * @param  {parsedToken.id};returnthis.findOne(query} ;letquery={_id
 */
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

/**
 * @password  {returnbcrypt.compare(password}
 * @param  {} this.password
 * 
 */
users.methods.comparePassword = function(password){
  return bcrypt.compare(password, this.password)
    .then(valid => valid ? this : null);
};

/**
 * @param  {} type
 * @param  {this._id} {lettoken={id
 * @param  {type||'regular'} type
 * @param  {} };returnjwt.sign(token
 * @param  {} SECRET
 */
users.methods.generateToken = function (type) {
  let token = {
    id: this._id,
    type: type || 'regular',
  };
  return jwt.sign(token, SECRET);
};

module.exports = mongoose.model('users', users);
