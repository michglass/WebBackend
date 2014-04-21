'use strict';

var mongoose = require('mongoose');
var Contact = mongoose.model('Contact');

exports.create = function(req,res,next){
	res.header("Access-Control-Allow-Origin","http://localhose");
	res.header("Access-Control-Allow-Methods","GET, POST");
	Contact.create({
		contactName : req.body.contactName,
		contactNumber : req.body.contactNumber,
		contactEmail : req.body.contactEmail,
	}, function(err, contact){
		if(err){
			res.send(err);
		}
		else{
			Contact.find(function(err,contacts){
				if(err){
					res.send(err);
				}
				else{
					res.json(contacts);
				}
			});
		}
	});
};

exports.remove = function(req,res){
	Contact.remove({
		_id : req.params.id
	}, function(err, contact){
		if(err){
			res.send(err);
		}
		else{
			Contact.find(function(err,contacts){
				if(err){
					res.send(err);
				}
				else{
					res.json(contacts);
				}
			});
		}
	});
};

exports.allContacts = function(req,res){
	Contact.find().exec(function(err,contacts){
		if(err){
			res.send(err);
		}
		else{
			res.json(contacts);
		}
	});
};