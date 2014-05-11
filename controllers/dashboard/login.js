var auth = require('../auth');
var knex = require('../../models/database').knex;
var settings = require('../../settings');

var nb = auth.authenticate('local', {
        failureRedirect: settings.site.URL + '/dashboard/login?pwd',
        successRedirect: settings.site.URL + '/dashboard'
    });
    


function showLogin(req,res){
  if (req.user) res.redirect(settings.site.URL + '/dashboard');
  knex('users').select('id').limit(1).then(function(rows){
      res.render('login', {
             site: settings.site,
             show: rows.length ? 'login' : 'create',
             msg: typeof req.query.pwd !== 'undefined' ? 'Incorrect username or password' : undefined
      });
      
  });
    
}

exports.showLogin = showLogin;
exports.authenticate = nb;