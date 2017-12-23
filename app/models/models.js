var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new mongoose.Schema({
	created_by: String,
	created_at: {type: Date, default: Date.now},
	text: String
});

var userSchema = new mongoose.Schema({
	name: String,
	username: String,
	password: String,
	created_at: {type: Date, default: Date.now}
});


var Posts =mongoose.model('Post', postSchema);
var Users =mongoose.model('User', userSchema);
