'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
	message : String
});

mongoose.model('Message', MessageSchema);