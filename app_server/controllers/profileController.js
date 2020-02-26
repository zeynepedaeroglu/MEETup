module.exports.profileGet = function(req, res){
    if(req.cookies.user){
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/";

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("meetup");
            var query = {username: req.cookies.user};
            dbo.collection("users").find(query).toArray(function (err, result) {
                res.render('profile', {
                    kukiname: result[0].name,
                    kukisurname: result[0].surname,
                    kukiusername: result[0].username,
                    kukidescription: result[0].description,
                    kukiinstagram: result[0].instagram,
                    kukifacebook: result[0].facebook
                });
            });
        });
    }
    else {
        res.redirect('/login');
    }
};

module.exports.buildGet = function(req, res){
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("meetup");
        var query = {username: req.cookies.user};
        dbo.collection("users").find(query).toArray(function (err, result) {
            if (result[0]) {
                res.render('buildProfile', {
                    kukiname: result[0].name,
                    kukisurname: result[0].surname,
                    kukiusername: result[0].username
                });
            }
            else {
                //console.log(result[0]);
                res.redirect('/login');
            }
        });
    });
};

module.exports.buildPost = function (req, res) {

    console.log(req.cookies.user);
    console.log(req.body);
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("meetup");
        var query = {username: req.cookies.user};
        dbo.collection('users').update(query , {$set:{description: req.body.description, facebook:req.body.facebook , instagram: req.body.instagram}});
        console.log(req.cookies.user + 'kişisinin profili güncellendi');
        res.redirect('/profile');
        });
};
