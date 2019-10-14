'use strict';

const mongoose = require('mongoose');

const events = new mongoose.Schema({
  eventTitle: {type: String, required: true, unique: true},
  eventDescription: {type: String},
  eventSplashImage: {type: Image},
  eventOwnerId: {type: String, required: true, unique: true},
  eventGuestIds: {type: String, unique: true},
  pictureId: {type: String, required: true, unique: true},
  qrCode: {type: BarCodeScanner.Constants.BarCodeType.qr, data: string, required: true, unique: true}
});

module.exports = events;
