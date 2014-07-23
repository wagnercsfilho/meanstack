var express		 	= require('express');
var app 		 	= express();
var server 			= require('http').Server(app);
var io 				= require('socket.io')(server);
var mongoose 	 	= require('mongoose');
var bodyParser 	 	= require('body-parser');
var methodOverride  = require('method-override');

var db = require('./config/db');

mongoose.connect(db.url);

var port = process.env.PORT || 8080;

app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Pass to next layer of middleware
    next();
});

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/routers')(app, io); // configure our routes

server.listen(port);
console.log('Magic happens on port '+ port);

module.exports = app;