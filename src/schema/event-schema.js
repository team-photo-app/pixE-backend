'use strict';

const mongoose = require('mongoose');
/**
 * Event Model
 * @param  {{type:String} {eventTitle
 * @param  {true} required
 * @param  {true}} unique
 * @param  {{type:String}} eventDescription
 * @param  {{type:Image}} eventSplashImage
 * @param  {{type:String} eventOwnerId
 * @param  {true} required
 * @param  {true}} unique
 * @param  {{type:String} eventGuestIds
 * @param  {true}} unique
 * @param  {{type:String} pictureId
 * @param  {true} required
 * @param  {true}} unique
 * @param  {} }
 */
const events = new mongoose.Schema({
  eventTitle: {type: String, required: true, unique: true},
  eventDescription: {type: String},
  eventSplashImage: {type: Image},
  eventOwnerId: {type: String, required: true, unique: true},
  eventGuestIds: {type: String, unique: true},
  pictureId: {type: String, required: true, unique: true},
  // qrCode: {type: BarCodeScanner.Constants.BarCodeType.qr, data: string, required: true, unique: true}
});

module.exports = events;
