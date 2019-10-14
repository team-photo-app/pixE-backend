'use strict';

const mongoose = require('mongoose');

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
