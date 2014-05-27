var express = require('express');
var when = require('when');
var settings = require('../../settings');
var _ = require('lodash');
var Post = require('../../models/post');
var RecentPosts = require('../../models/recentposts');
var marked = require("marked");
var moment = require('moment');

function render(req,res,posts,recentPosts){
    
    for(i = 0; i < posts.length; i++){
        posts[i]['body'] = marked(posts[i]['body']);
        postBody = posts[i]['body'].split('</p>');
        posts[i]['body'] = postBody[0] + "</p>" + postBody[1] || ""  + "</p>" + postBody[2] || "" + "</p>";
        posts[i]['created_at'] = moment(posts[i]['created_at']).format("MMM DD, YYYY");
    }
    
    res.render('index', { 
        page: 'index/archive',
		sidebar: false,
        site: settings.site,
        index: settings.theme.index,
        posts: posts,
        recentPosts: recentPosts,
        title: settings.site.name + " - " + settings.site.tagline
    });

}

function home(req, res) {
    var posts = new Post.posts();
    posts.query(function(qb){qb.orderBy('created_at','DESC')})
        .fetch().then(function(_posts){
            RecentPosts().then(function (recentPosts){ 
                render(req,res,_posts.toJSON(),recentPosts.toJSON() ); });
    });

}

module.exports = home;