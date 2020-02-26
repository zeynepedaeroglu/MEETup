module.exports.signupGet= function (req, res){
    if(req.cookies.user){
        res.render('home', {k: req.cookies.user, s:'sign up'});
    }else{
        res.render('signup');
    }

};

module.exports.signupPost= function (req, res) {

    var newUser = {name: req.body.ad, surname: req.body.soyad, mail:req.body.email, username:req.body.kullaniciAdi, password: req.body.sifre, description:'' , facebook: '', instagram:''};

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("meetup");
        dbo.collection("users").insert(newUser, function(err,result){
        if(err)
            res.redirect('/login/signup');
        else{
            console.log(req.body.kullaniciAdi + 'kayıt yaptı.');
            res.cookie('user', req.body.kullaniciAdi);
            res.redirect('/profile/build');
        }
    });
    });

};