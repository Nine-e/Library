function ToSignUp() {
    var email = $('#emailText').val(),
        password = $('#passwordText').val();
    if (email && password) {
        $.ajax({
            type: "GET", //提交方式  
            url: "http://localhost:8000/nodejs/login.js", //路径  
            data: {
                "email": email,
                "password": password
            },
            datatype: "string",
            //数据，这里使用的是Json格式进行传输  
            success: function(result) { //返回数据根据结果进行相应的处理
                var s = result,
                    l;
                l = s.length;
                var ans = s.search(email)
                if (ans >= 0) {
                    //alert("yeah");
                    window.location.href = "../html/index.html"
                } else {
                    alert("Not exsit or wrong user");

                }
            }

        });
    } else {
        alert("Format error & Empty data");
    }

}
$('body').delegate('#login-btn', 'click', ToSignUp);