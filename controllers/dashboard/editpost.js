var express = require('express');
var Post = require('../../models/post');
var settings = require('../../settings');

function editPost(req, res, next){
    
        var id = parseInt(req.params.id);
        
        if (isNaN(id)) {
            res.render('dashboard', { title: 'Dashboard', site: settings.site, navbar: false, page: 'dashboard/editpost', post: [] });
        }
        else {
            var post = new Post.post({id: id}).fetch().then(function(model){
                res.render('dashboard', { title: 'Dashboard', site: settings.site, navbar: false, page: 'dashboard/editpost', post: model.toJSON() });
            });
        }
}

module.exports = editPost;