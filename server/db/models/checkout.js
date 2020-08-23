const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema(
  {
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
      type: Integer,
      required: true
    },
    expirationDate: {
      type: Date,
      required: true
    },

    cvvNumber: {
      type: Integer,
      required: true
    },
    address: {
      type: String,
      required: true
    },

    confirmationNumber: {
      type: String,
      unique: true
    }
  },
  {
    timestamps: true
  }
);

const Checkout = mongoose.model('Checkout', checkoutSchema);
module.exports = 'Checkout';
