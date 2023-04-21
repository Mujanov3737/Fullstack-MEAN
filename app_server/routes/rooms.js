var express = require('express');
var router = express.Router();

// Import controller that was created earlier
const controller = require('../controller/rooms');

// GET homepage by calling controller
router.get('/', controller.rooms);

module.exports = router;