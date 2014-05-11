var fs   = require('fs');
var knex = require('../models/database').knex;
var Post = require('../models/post').post;

function newInstall(){

    knex.schema.createTable('users', function (table) {
        table.increments('id').primary();
        table.text('username');
        table.text('password');
        table.text('salt');
        table.timestamps();
    }).then(function () {

            knex.schema.createTable('posts', function (table) {
                table.increments('id').primary();
                table.text('title');
                table.text('body');
                table.text('uri');
                table.text('description');
                table.text('type');
                table.timestamps();
            }).then(function () {

                    var postBody = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi **ut aliquip** ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n###Aliquip consectetur reprehenderit sunt nisi esse qui do aliquip aliqua. laborum.\n\n- I like disco\n- laborum\n- magna velit dolore in non proident\n\nBut consequat. deserunt Excepteur quis Duis qui velit aute Excepteur culpa officia incididunt nulla sunt elit, Ut ipsum qui adipisicing officia ea aute occaecat Ut quis laborum. minim laborum. in id do ipsum sed cillum do.\n\nVelit cillum proident, aute Ut deserunt occaecat est in aliqua. ut minim non occaecat consequat. irure ea consectetur Excepteur aliqua. dolor do velit enim dolore est anim reprehenderit exeitation reprehenderit eiusmod magna sint anim id dolore occaecat ea aute non quis est laborum. \n\n    $(document).ready(function(){\n       $("div").click(function(){\n          $(this).hide();\n       });\n    });\n\n###Cillum nostrud ea velit amet, ea dolore aliqua. \nlaboris officia aliquip commodo consequat. est undefined proident, ut aute qui in sit enim culpa aliquip irure incididunt labore qui culpa eu ea aliqua. esse aute laboris mollit cupidatat dolore non ea dolore nulla ut aute in qui aliqua. anim sit undefined occaecat dolore fugiat irure consequat. id pariatur. et ipsum laboris commodo ad Excepteur ullamco elit, dolor.\n\n    tail -f /var/log/apache2/error.log\n\nAnim ullamco aliquip dolor proident, irure aute ullamco ipsum dolore voluptate adipisicing dolor Lorem id mollit consectetur voluptate Duis proident, adipisicing in pariatur. commodo ad magna proident, reprehenderit id sit aliqua. esse aute anim irure ipsum sunt magna undefined deserunt fugiat dolor in ut in amet, eiusmod tempor adipisicing laborum. elit, magna aliqua. minim eu veniam, cillum dolore ea exercitation veniam, non in.\n\nDolore elit, mollit ut undefined undefined elit, exercitation cupidatat commodo nostrud magna exercitation pariatur. sunt do Duis qui anim aliquip officia ex dolore fugiat fugiat non cupidatat quis magna ex eiusmod mollit cupidatat magna occaecat Duis sunt aute Lorem cillum dolore id est minim aliquip voluptate nulla undefined non elit, nulla in aute reprehenderit dolor sint.';

                    postData = {
                        title: 'Hello, this is a sample post!',
                        body: postBody,
                        uri: 'hello-this-is-a-sample-post'
                    }

                    var post = new Post(postData).save();

                });

        });

}


function initialize(){


    knex.schema.hasTable('users').then(function(exists) {
        if (!exists) {
            newInstall();
            console.log('new install');
        }
    });

}

module.exports = initialize();