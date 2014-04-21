'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
	contactName : String,
	contactEmail : String,
	contactNumber : String
});

mongoose.model('Contact', ContactSchema);