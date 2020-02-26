module.exports.deleteAccount = function(req, res){

        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/";

        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("meetup");
            var one = {username: req.cookies.user};
            dbo.collection("users").deleteOne(one, function(err,result){
                if(err)
                    res.redirect('/profile');
                else{
                    console.log(req.cookies.user + 'kişisinin hesabı silindi.');
                    res.clearCookie('user');
                    res.redirect('/login');
                }
            });
        });
};