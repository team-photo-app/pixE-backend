'use strict';

const mongoose = require('mongoose');
/**
 * Picture Model
 * @param  {{type:String} {userId
 * @param  {true} required
 * @param  {true}} unique
 * @param  {{type:String} eventId
 * @param  {true} required
 * @param  {true}} unique
 * @param  {{type:String} pictureId
 * @param  {true} required
 * @param  {true}} unique
 * @param  {{type:String} eventPictureId
 * @param  {true} required
 * @param  {true}} unique
 * @param  {{type:String}} description
 * @param  {{type:String}}} tags
 */
const pictures = new mongoose.Schema({
  userId: {type: String, required: true, unique: true},
  eventId: {type: String, required: true, unique: true},
  pictureId: {type: String, required: true, unique: true},
  // event id + picture id also saved in s3
  eventPictureId: {type: String, required: true, unique: true},
  description: {type: String},
  tags: {type: String}
});

module.exports = pictures;
