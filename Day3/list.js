var express = require('express');
var http = require('http');
var url = require('url');
var path = require('path');
var body = require('body-parser');
var aa = body.urlencoded({extended:false});

var app = express();
var mysql = require('mysql');

app.set('port',process.env.PORT || 4300);
app.set('views',path.join(__dirname,'views'));
app.set('views engine','ejs');
var con= mysql.createConnection({
    host:'localhost',user:'root',password:'',database:'mymod'
});

app.get("/register",function(req,res){
    res.render("register");
});
app.post("/register1",aa,function(req,res){
    console.log(req.body);
    console.log(req.body.t1);
    var empno = req.body.t1;
    var name = req.body.t2;
    var sp = "insert into login(name,password) values('"+empno+"','"+name+"')";
    console.log(sq);
    con.query("insert into login(name,password) values('"+empno+"','"+name+"')",function(err,rows){
        if(err) throw err;
        res.end("inserted");
    });
});

app.get('/',function(req,res){
    con.query("Select * from login",function(err,kk){
        if(err) throw err;
        res.render('testtable',{data:kk});
    });

});

http.createServer(app).listen(app.get('port'),function(){
    console.log('Express Server listening on Port '+app.get('port'));
});