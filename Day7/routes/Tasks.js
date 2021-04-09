var express = require('express');
var router = express.Router();
var Task=require('../models/Task');


router.get("/reg",function(req,res)
{

res.render("reg");

});

router.get('/:id?',function(req,res,next){

if(req.params.id){

    Task.getTaskById(req.params.id,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
}
else{
var kk=[];
 Task.getAllTasks(function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {kk=rows;
		    console.log(kk);
            //res.json(rows);
        }
 
    });
}
});


router.post('/add',function(req,res,next){

        Task.addTask(req.body,function(err,count){

            console.log(req.body);
            if(err)
            {
                res.json(err);
            }
            else{
                    res.json(req.body);//or return count for 1 & 0
            }
        });
});
 
module.exports=router;