function ToSignUp() {

var email = "1";
    $.ajax({
        type: "GET", //提交方式  
        url: "http://localhost:8000/nodejs/borrow.js", //路径  
        data: {
            "email": email,
        },
        datatype: "string",
        //数据，这里使用的是Json格式进行传输  
        success: function(result) { //返回数据根据结果进行相应的处理
            var s = result,
                l;
            l = s.length;
           // var ans = s.search(email)
            if (l >= 0) {
                //alert("yeah");
               // window.location.href = "../html/index.html"
               console.log(s);
            } 
        }

    });
}

$(document).ready(ToSignUp());
