var http = require('http');

http.createServer(function(req1,res1){
    var a = 10;
    var b = 32;
    var c = 43;
    if(a>b && a>c){
        res1.write("A is greater");
    } 
    else if(b>c){
        res1.write("B is greater");
    }
    else{
        res1.write("C is greater");
    }
    res1.end();
}).listen(4040);