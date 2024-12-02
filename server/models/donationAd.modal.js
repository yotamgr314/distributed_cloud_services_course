const mongoose = require('mongoose');

const donationAdSchema = new mongoose.Schema({
  name: {
     type: String,
      required: true
    },
  description: { 
    type: String
    },
  images: [
    {
        type: String // URLs for images.
    }
    ],
  condition: {
    type: String,
    enum: ['Like New', 'Gently Used', 'Heavily Used'],
    required: true
    },
  category: {
    type: String,
    required: true
    },
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], required: true } // [longitude, latitude] for google maps API.
  },
  status: {
    type: String,
    enum: ['Available', 'Claimed', 'Donated'],
    default: 'Available'
    },
  donor: {   /* TODO - realise what is this for */
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
    },
  createdAt: {
    type: Date,
    default: Date.now }
});

donationAdSchema.index({ location: '2dsphere' }); /* TODO - realise what are these for */

module.exports = mongoose.model('DonationAd', donationAdSchema);
