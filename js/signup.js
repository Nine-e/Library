function ToSignUp() {
    var email = $('#emailText').val(),
        password = $('#passwordText').val();
    
    email.trim();
    password.trim();

    var re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
    var tt = false;

    if (re.test(email)) {
        tt = true;
    }

    if ( email && password && tt) {
        $.ajax({
            type: "GET", //提交方式  
            url: "http://localhost:8000/nodejs/signup.js" ,//路径  
            data: {
                "email": email,
                "password": password
            },
            //数据，这里使用的是Json格式进行传输  
            success: function(result) {
                //返回数据根据结果进行相应的处理 
                if (result) {
                    window.location.href = "../html/login.html"
                } else {
                   alert("This account already exists");
                }
            }

        });
    } else {
        alert("Format error & Empty data");

    }

}
$('body').delegate('#signup-btn-continue', 'click', ToSignUp);