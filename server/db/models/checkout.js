const mongoose = require('mongoose');

const CheckoutSchema = new mongoose.Schema({
  userId: {
    userId: true,
    required: true
  },
  parkId: {
    required: true
  },
  partySize: {
    required: true
  },
  creditCardNumber: {
    required: true
  },
  address: {
    type: String,
    required: true
  }
});

const Checkout = mongoose.model('Checkout', checkoutSchema);
module.exports = 'Checkout';
