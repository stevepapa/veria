var express         = require('express');
var router          = express.Router();
var post            = require('../controllers/post/index');

// dashboard root
router.get('/:postURI', post.find );

// init
module.exports = router;