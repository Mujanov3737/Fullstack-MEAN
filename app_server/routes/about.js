var express = require('express');
var router = express.Router();

// Import controller that was created earlier
const controller = require('../controller/about');

// GET homepage by calling controller
router.get('/', controller.about);

module.exports = router;