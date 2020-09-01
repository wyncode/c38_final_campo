const express = require('express');
const parkController = require('./../controllers/parkController');
const authController = require('./../controllers/authController');
const reviewRouter = require('./../routes/reviewRoutes');

const router = express.Router();

// router.param('id', parkController.checkID);

// POST /park/234fad4/reviews
// GET /park/234fad4/reviews

router.use('/:parkId/reviews', reviewRouter);

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopParks, parkController.getAllParks);

router.route('/park-stats').get(parkController.getParkStats);
router
  .route('/monthly-plan/:year')
  .get(
    authController.protect,
    authController.restrictTo('admin', 'owner', 'guide'),
    parkController.getMonthlyPlan
  );

router
  .route('/parks-within/:distance/center/:latlng/unit/:unit')
  .get(parkController.getParksWithin);
// /parks-within?distance=233&center=-40,45&unit=mi
// /parks-within/233/center/-40,45/unit/mi

router.route('/distances/:latlng/unit/:unit').get(parkController.getDistances);

router
  .route('/')
  .get(parkController.getAllParks)
  .post(
    authController.protect,
    authController.restrictTo('admin', 'owner'),
    parkController.createPark
  );

router
  .route('/:id')
  .get(parkController.getPark)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'owner'),
    parkController.uploadParkImages,
    parkController.resizeParkImages,
    parkController.updatePark
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'owner'),
    parkController.deletePark
  );

module.exports = router;