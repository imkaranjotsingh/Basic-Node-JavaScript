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
app.use(express.static(path.join(__dirname,'public')));

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"nodejs"
});

app.get('/multi',function(req,res){
    con.query("select * from countries",function(err,records){
        if(err) throw(err);
        res.render('multiple',{countries:records});
    });
});

app.get('/states/:id',function(req,res){
    con.query("select * from states where Ccode'"+req.params.id+"'",function(err,records){
        if(err) throw (err);
        res.json({states:records});
        res.end()
    });
});

app.get('/cities/:id',function(req,res){
    con.query("select * from cities where Scode='"+req.params.id+"'",function(err,records){
    if(err) throw(err);
    res.json({cities:records});
    res.end()
    });
});

http.createServer(app).listen(app.get('port'),function(){
    console.log("Express Server Listening on Port "+app.get('port'));
});