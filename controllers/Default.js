'use strict';

var url = require('url');

var Default = require('./DefaultService');

var operation = "operation";
var number1 = 0;
var number2 = 0
var result = 0;

module.exports.divideGET = function divideGET (req, res, next) {
	console.log("GET request /divide");
	
	operation = "divide";
	number1 = parseInt(req.query.number1);
	number2 = parseInt(req.query.number2);
	result = (number1 / number2);
	
	res.json({operation,number1, number2, result});
  Default.divideGET(req.swagger.params, res, next);
};

module.exports.minusGET = function minusGET (req, res, next) {
	console.log("GET request /minus");
	
	operation = "minus";
	number1 = parseInt(req.query.number1);
	number2 = parseInt(req.query.number2);
	result = (number1 - number2);
	
	res.json({operation,number1, number2, result});
  Default.minusGET(req.swagger.params, res, next);
};

module.exports.multiplyGET = function multiplyGET (req, res, next) {
	console.log("GET request /multiply");
	
	operation = "operation";
	number1 = parseInt(req.query.number1);
	number2 = parseInt(req.query.number2);
	result = (number1 * number2);
	
	res.json({operation,number1, number2, result});
  Default.multiplyGET(req.swagger.params, res, next);
};

module.exports.plusGET = function plusGET (req, res, next) {
	console.log("GET request /plus");
	
	operation = "plus";
	number1 = parseInt(req.query.number1);
	number2 = parseInt(req.query.number2);
	result = (number1 + number2);
	
	res.json({operation,number1, number2, result});
  Default.plusGET(req.swagger.params, res, next);
};
