var express = require('express');
var router = express.Router();

// Import controller that was created earlier
const controller = require('../controller/contact');

// GET homepage by calling controller
router.get('/', controller.contact);

module.exports = router;