var Memcached = require('memcached');
var memcached = new Memcached('127.0.0.1:11211');

var signupBtn = document.getElementById('signup-btn-continue');

signupBtn.addEventListener('click', function(e) {
	var email = document.getElementById('emailText').value;
	var password = document.getElementById('passwordText').value;
	//console.log(email);
	memcached.get(email, function(err, result) {
		if (err) console.error(err);
		//console.log(result);
		if (result) {
			alter("this emial is existed!");
		} else {
			memcached.set(email, password, 10000, function(err, result) {
				if (err) console.error(err);
				console.log(result);
			});
		}
		memcached.end();
	});
});