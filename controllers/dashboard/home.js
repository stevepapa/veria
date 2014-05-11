var express = require('express');
var Post = require('../../models/post');
var settings = require('../../settings');
var moment = require('moment');

function home(req,res, next){        
    var posts = new Post.posts();
    posts.fetch().then(function(posts){

        posts  = posts.toJSON();

        for(i = 0; i < posts.length; i++){
            posts[i]['created_at'] = moment(posts[i]['created_at']).format("MMM DD, YYYY");
        }
                    res.render('dashboard', { title: 'Dashboard', site: settings.site ,navbar: true, page: 'dashboard/index', posts: posts });
    });
 
    
}

module.exports = home;