module.exports = function(io){

var Geek = require('../models/geek');

var GeekCtrl = {
    index : function(req, res){
			Geek.find(function(err, geek){
					if (err)
						res.send(err); 
					console.log(io.sockets);
					res.json(200, geek);
			});
	},
	create : function(req, res){
			var newgeek = req.body;

			Geek.create(newgeek, function(err, geek){
			if (err)
				res.send(err); 

			io.sockets.emit('geek', geek);
			res.json(geek);
			});
	}
};

	return GeekCtrl;

}