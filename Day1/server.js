var express = require('express');
var app = express();
var path = require('path');
var http = require('http');

app.set('port',process.env.PORT || 4300);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')));
app.get("/xyz",function(req,res){
    console.log("register");
    res.render("register");
});
app.get("/",function(req,res){
    res.render("index");
});
app.get("/about",function(req,res){
    var kk = "ajay";
    res.render("about",{data:kk});
});

http.createServer(app).listen(app.get('port'),function(){
    console.log("Express Server Listening on Port "+app.get('port'));
});