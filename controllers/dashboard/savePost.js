var express = require('express');
var Post = require('../../models/post');
var settings = require('../../settings');

function savePost(req, res, next) {

    var slug = req.body.post.title
            .replace(/[^\w-\ ]+/g,'') 
            .replace(/ /g,'-')
            .replace(/--+/g,'-')
            .toLowerCase();

            req.body.post.uri = slug;

    var post = new Post.post(req.body.post);
    post.save().then(function(_posts){
                  res.writeHead(302, {
                    'Location': settings.site.URL + '/' + slug
                  });
                  res.end(); 
     
    });

};

module.exports = savePost;