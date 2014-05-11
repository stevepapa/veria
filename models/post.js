var veriaBookshelf = require('./database');

var post = veriaBookshelf.Model.extend({
    tableName: 'posts',
    hasTimestamps: true
});

var posts = veriaBookshelf.Collection.extend({
    model: post
});

exports.post = post;
exports.posts = posts;