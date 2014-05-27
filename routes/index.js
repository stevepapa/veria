var express = require('express');
var index = require('../controllers/index/index');
var archive = require('../controllers/index/archive');
var router = express.Router();

/* GET home page. */
router.get('/', index);

router.get('/archive',archive);

module.exports = router;