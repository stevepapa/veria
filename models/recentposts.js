var Post = require('./post');
var _    = require('lodash');
var when = require('when');

function getRecentPosts(){
    var deferred = when.defer();

    var collection = new Post.posts();
    collection.query(function(qb){qb.orderBy('created_at','DESC')})
        .fetch({columns: ['id','title','uri'] }).then(function(data){
            deferred.resolve(data);
    });    
    
    return deferred.promise;
}

module.exports = getRecentPosts;