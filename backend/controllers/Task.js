const Task = require('../modules/task');

exports.createTask = async (req,res)=>{

    try{

        const {task} = req.body;

        if(!task){
            return res.status(402).json({
                success:"False",
                message:"Task filed is required"
            })
        }

        const response = await Task.create(
            {
                task:task,
                createdAt:Date.now()
            }
        );

        return res.status(200).json({
            success:"True",
            message:"Task  created successfully",
            response
        })


    }
    catch(err){
        return res.status(500).json({
            success:"False",
            message:err.message,
        })
    }   

}

exports.getAllTasks = async(req,res)=>{

    try{

        const response = await Task.find({});

        return res.status(200).json({
            success:"True",
            message:"All tasks are fetched successfully",
            body:response,
        })

    }
    catch(err){
        return res.status(500).json({
            success:"False",
            message:err.message
        })
    }


}

exports.deleteTask = async(req,res)=>{

    try{

        const {taskid} = req.body;

        if(!taskid){
            return res.status(402).json({
                success:"False",
                message:"All tasks are required"
            })
        }

        await Task.findByIdAndUpdate({_id:taskid},{
            $set:{
                completed:true
            },
        });

        return res.status(200).json({
            success:"True",
            message:"Task Deleted successfully"
        })

    }
    catch(err){
        return res.status(500).json({
            success:"False",
            message:err.message
        })
    }

}

exports.undoTask = async(req,res)=>{
   

        try{
    
            const {taskid} = req.body;
    
            if(!taskid){
                return res.status(404).json({
                    success:"False",
                    message:"All tasks are required"
                })
            }
    
            await Task.findByIdAndUpdate({_id:taskid},{
                $set:{
                    completed:false
                },
            });

    
            return res.status(200).json({
                success:"True",
                message:"Task Deleted successfully"
            })
    
        }
        catch(err){
            return res.status(500).json({
                success:"False",
                message:err.message
            })
        }
    
    
}

exports.updateTask = async(req,res)=>{
    try{

        const  {taskid , task} = req.body;

        if(!taskid || !task){
            return res.status(402).json({
                success:"False",
                message:"All fileds are required"
            })
        }

        const response = await Task.findByIdAndUpdate({_id:taskid},{task:task})

        return res.status(200).json({
            success:"True",
            message:"Task Update  successfull",
            body:response,
        })

    }
    catch(err){
        return res.status(500).json({
            success:"False",
            message:err.message
        })
    }
}




