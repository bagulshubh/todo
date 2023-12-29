const Project = require('../modules/project')

exports.createProject = async(req,res)=>{

    try{
        const name = req.body.name;
        if(!name){
            return res.status(404).json({
                success:"False",
                message:"Name is required"
            })
        }

        const project = await Project.create({name:name});

        return res.status(201).json({
            success:"True",
            message:"Project Created Successfully",
            body:project
        })

    } catch(err){
        return res.status(500).json({
            success:"False",
            message:err.mesasge,
            location:"Project Controller"
        })
    }

}

exports.getAllProjects = async(req,res)=>{

    try{

        const allProjects = await Project.find({})

        return res.status(200).json({
            success:"True",
            message:"Fetched",
            body:allProjects
        })

    } catch(err){
        return res.status(500).json({
            success:"False",
            message:err.message
        })
    }

}

exports.getProjectTasks = async(req,res)=>{

    try{

        const id = req.params.id;

        const tasks = await Project.findById(id).populate('tasks').exec();

        return res.status(200).json({
            success:"True",
            message:"Fetched",
            body:tasks
        })

    } catch(err){
        return res.status(500).json({
            success:"False",
            message:err.message,
            location:"GetProjectTask controller"
        })
    }

}
