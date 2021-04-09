const express = require("express");
const multer = require("multer");
const fs = require("fs");

var mysql = require('mysql');
var http = require('http');


const path = require('path');
var con = mysql.createConnection({host:'localhost',user:'root',password:'',database:'demo'});

const storage = multer.diskStorage({
    destination: (req,file,callback) => {
        callback(null,"./public/uploads");
    },
    filename: (req,file,cb) => {
        cb(null, (file.fieldname = file.originalname));
    }
});

const upload = multer({storage:storage});

const app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set("views","./views");
app.set("view engine","ejs");

app.get("/",(req, res) => {
    res.render("index");
});

app.use(express.static(path.join(__dirname,'public')));
app.post("/upload",upload.single("file"), (req, res, next) => {
    console.log(req.file);
    var file1="";
    if(req.file != undefined){
        file1 = req.file.filename;
        console.log(req.body.username);
        console.log(req.body.password);
        con.query("insert into login(username,password,image) values('"+req.body.username+"','"+req.body.password+"','"+req.file.filename+"')",function(err,result){
            if(result){
                con.query("select * from login",function(err,rows){
                    res.render("list",{data:rows});
                });
            }
        });
    }
    else{
        console.log("Files Not Upload");
    }
    console.log(file1);
});

http.createServer(app).listen(app.get('port'),function(){
    console.log("Express Server Listening on Port "+app.get('port'));
});