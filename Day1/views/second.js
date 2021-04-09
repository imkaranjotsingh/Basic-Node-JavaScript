var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function(req,res){
    res.write("The date and time is currently " + dt.abc());
    res.end();
}).listen(8090);