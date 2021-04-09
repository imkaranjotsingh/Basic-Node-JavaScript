var path = require('path');
var http = require('http');

var body = require('body-parser');
var aa = body.urlencoded({extended:false});

var url = require('url');

app.set('port',process.env.PORT || 4300);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__diename,'public')));
app.get("/xyz",function(req,res){
    console.log(__dirname);
    res.render("register");
});

app.post("/register_action",aa,function(req,res){
    console.log(req.body.t1);
});

app.get("/login_action",function(req,res){
    var query = url.parse(req.url,true).query;
    console.log(query.t1);
});
app.get("/",function(req,res){
    res.render("index");
});
