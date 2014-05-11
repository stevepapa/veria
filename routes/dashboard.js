var express         = require('express');
var router          = express.Router();
var dashboard       = require('../controllers/dashboard/index');
var auth            = require('../controllers/auth');
var checkAuth       = auth.checkAuth;

// dashboard root
router.get('/', checkAuth, dashboard.home );

// show login
router.get('/login', dashboard.login.showLogin );

// authenticate
router.post('/login', dashboard.login.authenticate );

// create new post
router.get('/post', checkAuth, dashboard.editPost );

// save post
router.post('/post', checkAuth, dashboard.savePost );

// post edit
router.get('/post/:id', checkAuth, dashboard.editPost );

// delete post
router.get('/post/:id/delete', checkAuth, dashboard.deletePost );

// create users
router.post('/createuser', auth.createUser );

// log out
router.get('/logout', function(req,res){
    req.logout();
    res.redirect('/');
} );

// init
module.exports = router;