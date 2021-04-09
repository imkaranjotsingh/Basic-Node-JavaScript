var db=require('../dbconnection');

var Task={

getAllTasks:function(callback){

return db.query("Select * from task",callback);

},
getTaskById:function(id,callback){

    return db.query("select * from task where Id=?",[id],callback);
},
addTask:function(Task,callback){
   console.log("inside service");
   console.log(Task.Id);
return db.query("Insert into task values(?,?,?)",[Task.Id,Task.Title,Task.Status],callback);

}
};
module.exports=Task;