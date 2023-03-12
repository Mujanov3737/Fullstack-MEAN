var express = require('express');
var router = express.Router();

// Import controller that was created earlier
const controller = require('../controller/meals');

// GET homepage by calling controller
router.get('/', controller.meals);

module.exports = router;