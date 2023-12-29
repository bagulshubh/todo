const  mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({

    task:{
        type:String,
        required:true,
    },
    completed:{
        type:Boolean,
        default:false,
    },
    createdAt:{
        type:Date,
        required:true,
    }
    

})

module.exports = mongoose.model("Task",taskSchema);
