var express = require('express');
var app = express();
var Memcached = require('memcached');
var memcached = new Memcached('127.0.0.1:11211');


app.get('/html/login', function(req, res) {
	var email = req.query.email;
	var password = req.query.password;
	memcached.get(email, function(err, result) {
		if (err) console.error(err);
		//console.log(result);
		if (result == password) {
			res.end(result);
		}
		memcached.end();
	});
})



var server = app.listen(8000, function() {

	var host = server.address().address
	var port = server.address().port

	console.log("应用实例，访问地址为 http://%s:%s", host, port)

})