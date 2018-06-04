var redis = require('redis'),
    client = redis.createClient();

 var email = req.query.email;
 client.on('connect',function(){
    client.hmset('1', {'js':'javascript','C#':'C Sharp'}, redis.print);
    client.hmset('1', 'SQL','Structured Query Language','HTML','HyperText Mark-up Language', redis.print);

    client.hgetall(email, function(err,res){
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }            
       console.log(res);
    });
});

client.on('ready',function(err){
    console.log('ready');
});