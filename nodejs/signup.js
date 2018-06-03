var express = require('express');
var app = express();
var Memcached = require('memcached');
var memcached = new Memcached('127.0.0.1:11211');


app.get('/html/signup', function(req, res) {
	var email = req.query.email;
	var password = req.query.password;
	memcached.get(email, function(err, result) {
		if (err) console.error(err);
		//console.log(result);
		if (result) {
			res.end(false);
		} else {
			memcached.set(email, password, 10000, function(err, result) {
				if (err) console.error(err);
				res.end(email);
			});
		}
		memcached.end();
	});
})