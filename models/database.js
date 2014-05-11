var Bookshelf   = require('bookshelf');
var dbConfig    = require('../settings.js').database;

var veriaDB     =  Bookshelf.initialize(dbConfig);

module.exports = veriaDB;

