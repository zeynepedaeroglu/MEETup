module.exports.loginGet=function(req, res){
    if(req.cookies.user){
        res.render('home', {k: req.cookies.user, s:'log in'});
    }else{
        res.render('login');
    }
};

module.exports.loginPost = function(req, res){
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("meetup");
        var query = { username: req.body.kkk};
        dbo.collection("users").find(query).toArray(function(err, result) {
            if (err) throw err;
            if(result[0]){
                if (result[0].password === req.body.ppp) {
                    res.cookie('user', result[0].username);
                    console.log(req.body.kkk + ' giriş yaptı');
                    res.redirect('/profile');
                }
                else{
                    console.log(req.body.kkk + ' giris yapamadı');
                    res.redirect('/login');
                }
            }
            else {
                console.log(req.body.kkk + ' kisisi bulunamadi');
                res.redirect('/login');
            }
            db.close();
            res.end();
        });
    });
};
