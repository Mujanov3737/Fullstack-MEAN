var express = require('express');
var router = express.Router();

const { expressjwt: expressJwt } = require('express-jwt');
const auth = expressJwt({
    secret: process.env.JWT_SECRET,
    userProperty: "payload",
    algorithms: ["HS256"],
});


const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');

router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);
    
router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(auth, tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode)
    .put(auth, tripsController.tripsUpdateTrip);
    
module.exports = router;