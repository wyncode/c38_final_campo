const mongoose = require('mongoose');
const geocoder = require('../../utils/geocoder')

const ParkSchema = new mongoose.Schema({
  parkId: {
    type: String,
    required: true,
    unique: true,
    trim: true 
  },
  name: {
    type: String
  },
  description: {
    type: String
  },
  campSiteAvail: {
    type: Number
  },
  maxPartySize: {
    type: Number
  },
  address: {
    type: String, 
    
  },
  location: {
    type: {
      type: String, 
      enum: ['Point'], 
      
    },
    coordinates: {
      type: [Number],
      index: '2dsphere'
    },
    formattedAddress: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Geocode & create location
ParkSchema.pre('save', async function(next) {
  const loc = await geocoder.geocode(this.address);
  this.location = {
    type: 'Point',
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress
  };

  // Do not save address
  this.address = undefined;
  next();
});

module.exports = mongoose.model('Park', ParkSchema);

