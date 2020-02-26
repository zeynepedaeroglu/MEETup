var fs = require('fs');
var express = require('express');
var app= require('express')();
var cookieParser = require('cookie-parser');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path= require('path');
var mongo = require('mongodb');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/app_server/views'));

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(ejsLayouts);
app.use('/public', express.static(path.join(__dirname, 'public')));
require('./app_server/routes/routeManager')(app);

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("meetup");
    dbo.createCollection("users", function (err, res) {
        if(err)
            throw err;
    });
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        //msg= req.cookies.name + ': ' + msg;
        io.emit('chat message', msg);
    });
});

http.listen(3000, function(){
    console.log('Project started at PORT:3000');
});