const express = require("express");
const router = express.Router();

const {createTask , getAllTasks , deleteTask , updateTask,undoTask} = require('../controllers/Task')

router.post('/create',createTask)
router.get('/getAllTask',getAllTasks)
router.put('/deleteTask',deleteTask)
router.put('/updateTask',updateTask)
router.put('/undoTask',undoTask)


module.exports = router
















