var express = require('express');
var router = express.Router();

// Import controller that was created earlier
const controller = require('../controller/main');

// GET homepage by calling controller
router.get('/', controller.index);

module.exports = router;
