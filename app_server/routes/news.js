var express = require('express');
var router = express.Router();

// Import controller that was created earlier
const controller = require('../controller/news');

// GET homepage by calling controller
router.get('/', controller.news);

module.exports = router;