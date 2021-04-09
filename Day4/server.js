var express = require('express');
var path = require('path');
var mysql = require('mysql');
var routes = require('routes');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set("port",process.env.PORT || 4300);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));


var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"myrect"
});

var url = require('url');

app.post('/search',function(req,res){
    var keyword = req.body.keyword;
    var sql = "Select 'college' from collegelist where 'keyword' like '"+keyword+"%' ";
    console.log(sql);
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get("/",function(req,res){
    res.render("index");
});

app.post("/endpoint1",function(req,res){
    var user = req.body.uname;
    console.log(user);
    res.send(user);
});

app.get('/endpoints',function(req,res){
    res.render("ajax1");
});

http.createServer(app).listen(app.get('port'),function(){
    console.log("Express Server Listening on Port "+app.get('port'));
});