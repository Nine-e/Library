var Memcached = require('memcached');
var memcached = new Memcached('127.0.0.1:11211');

var loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', function(e) {
	var email = document.getElementById('emailText').value;
	var password = document.getElementById('passwordText').value;
	//console.log(email);
	memcached.get(email, function(err, result) {
		if (err) console.error(err);
		//console.log(result);
		if(result==password){
			window.location.href='../html/index.html';
		}else{
			alter("fail to login!");
		}
		memcached.end();
	});
});