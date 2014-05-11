var express = require('express');
var Post = require('../../models/post');
var settings = require('../../settings');

function deletePost(req,res,next){
    
        var id = parseInt(req.params.id);
        
        if (isNaN(id)) {
            
        }
        else {
            var post = new Post.post({id: id}).destroy().then(function(){
                res.redirect(settings.site.URL + '/dashboard');
            });
        }
    
}

module.exports = deletePost;