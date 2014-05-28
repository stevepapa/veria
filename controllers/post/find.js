var express = require('express');
var render = ('./render');
var when = require('when');
var settings = require('../../settings');
var _ = require('lodash');
var Post = require('../../models/post');
var RecentPosts = require('../../models/recentposts');
var marked = require('marked');
var moment = require('moment');

function postRender(req,res,posts,recentPosts){
    
        posts['body'] = marked(posts['body']);
        posts['created_at'] = moment(posts['created_at']).format("MMM DD, YYYY");
    
        res.render('index', {
            page: 'index/post',
			sidebar: true,
            site: settings.site,
            index: settings.theme.index,
            posts: posts,
            recentPosts: recentPosts,
			disqus: { enabled: settings.plugins.disqus.enabled,
					  shortname: settings.plugins.disqus.shortname },
            title: posts.title + " - " + settings.site.name
        });

}

function find(req, res) {

    var postURI = req.params.postURI.replace(/[^\w-]+/g,'');

    var posts = new Post.post({uri: postURI});

    posts.fetch().then(function(_posts){
        
        
        if (_posts){
            RecentPosts().then(function (recentPosts){
                postRender(req,res,_posts.toJSON(),recentPosts.toJSON() );
            });
        } else {
              res.writeHead(302, {
                'Location': settings.site.URL
              });
              res.end();
        }
    });

}

module.exports = find;