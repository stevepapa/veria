var crypto        = require('crypto');
var sqlite3       = require('sqlite3');
var passport      = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

var db = new sqlite3.Database('./config/veria.db');

function hashPassword(password, salt) {
  var hash = crypto.createHash('sha256');
  hash.update(password);
  hash.update(salt);
  return hash.digest('hex');
}

function createSalt(){
    return crypto.randomBytes(32).toString('base64');
}

passport.createUser = function(req,res){
    
    var username = req.body.username;
    var password =  req.body.password;
    
    var salt = createSalt();
    var hashedPassword = hashPassword(password,salt);
    db.run("INSERT INTO `users`(username,password,salt) VALUES( ?, ?, ? );", [username,hashedPassword,salt], function(error) {
        res.redirect('/dashboard/login');
    });

}

passport.use(new LocalStrategy(function(username, password, done) {
  db.get('SELECT salt FROM users WHERE username = ?', username, function(err, row) {
    if (!row) return done(null, false);
    var hash = hashPassword(password, row.salt);
    db.get('SELECT username, id FROM users WHERE username = ? AND password = ?', username, hash, function(err, row) {
      if (!row) return done(null, false);
      return done(null, row);
    });
  });
}));

passport.serializeUser(function(user, done) {
  return done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  db.get('SELECT id, username FROM users WHERE id = ?', id, function(err, row) {
    if (!row) return done(null, false);
    return done(null, row);
  });
});

passport.checkAuth = function(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.redirect('/dashboard/login');
  }
};

module.exports = passport;