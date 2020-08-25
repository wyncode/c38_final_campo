const mongoose = require('mongoose');

const review = new mongoose.Schema(
  {
    userId: {
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    userReview: {
      type: String
    }
  },
  {
    timestamps: true
  }
);
const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
