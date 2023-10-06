const  mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({

    task:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        required:true,
    }

})

module.exports = mongoose.model("Task",taskSchema);
