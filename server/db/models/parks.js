const mongoose = require('mongoose');

const parkChoice = new mongoose.Schema({
  parkId: {
    required: true
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
  }
});
const ParkChoice = mongoose.model('ParkChoice', parkChoiceSchema);
module.exports = ParkChoice;
