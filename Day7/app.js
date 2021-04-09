var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');
//var routes = require('./routes/index');
var Tasks=require('./routes/Tasks');
var http = require('http');

var app = express();

app.set("port",process.env.PORT || 4300);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb',extended:false}));

app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
//app.use('/', routes);
app.use('/Tasks',Tasks);

app.use(function(req,res,next){
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

http.createServer(app).listen(app.get('port'),function(){
    console.log("Express Server Listening on Port "+app.get('port'));
});

