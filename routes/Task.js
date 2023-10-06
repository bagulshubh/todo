const express = require("express");
const router = express.Router();

const {createTask , getAllTasks , deleteTask , updateTask} = require('../controllers/Task')

router.post('/create',createTask)
router.get('/getAllTask',getAllTasks)
router.delete('/deleteTask',deleteTask)
router.post('/updateTask',updateTask)

module.exports = router
















