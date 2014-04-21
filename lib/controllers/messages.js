'use strict';

var mongoose = require('mongoose');
var Message = mongoose.model('Message');

exports.create = function(req,res,next){
	res.header("Access-Control-Allow-Origin","http://localhose");
	res.header("Access-Control-Allow-Methods","GET, POST");
	Message.create({
		message : req.body.message
	}, function(err,messages){
		if(err){
			res.send(err);
		}
		else{
			Message.find(function(err,messages){
				if(err){
					res.send(err);
				}
				else{
					res.json(messages);
				}
			});
		}
	});
};

exports.remove = function(req,res){
	Message.remove({
		_id : req.params.id
	}, function(err,message){
		if(err){
			res.send(err);
		}
		else{
			Message.find(function(err,messages){
				if(err){
					res.send(err);
				}
				else{
					res.json(messages);
				}
			});
		}
	});
};

exports.allMessages = function(req,res){
	Message.find().exec(function(err,messages){
		if(err){
			res.send(err);
		}
		else{
			res.json(messages);
		}
	});
};