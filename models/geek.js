var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GeekSchema = new Schema({
	"name": {type: String, required: true, trim: true},
	"Location" : {type: String}
});

module.exports = mongoose.model('Beer', GeekSchema);