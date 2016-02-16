var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');

var home = require('./routes/index');
var users = require('./routes/users');
var dashboard = require('./routes/dashboard');
var post = require('./routes/post');

var engine = engine = require('ejs-locals');

var app = express();

var passport = require('./controllers/auth');

var veriaLoader = require('./config/verialoader');

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({ secret: 'kjfewggwe_WaWa__gew', cookie: { maxAge : 1200000 }, resave: false, saveUninitialized: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(passport.session());


app.use('/', home);
app.use('/dashboard', dashboard);
app.use('',post);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;