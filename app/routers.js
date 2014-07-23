module.exports = function(app, io){

	var Geek = require('../models/geek');
	var GeekCtrl = require('../controllers/geekController')(io);

	app.get('/api/geeks', GeekCtrl.index);

	app.post('/api/geeks', GeekCtrl.create );

	app.get('*', function(req, res){
		res.sendfile('./public/index.html');
	});

};