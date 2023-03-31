var express = require('express');
var router = express.Router();

// Import controller that was created earlier
const controller = require('../controller/travel');

// GET homepage by calling controller
router.get('/', controller.travelList);

module.exports = router;
