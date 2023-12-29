const express = require("express");
const router = express.Router();

const {createProject , getAllProjects , getProjectTasks }  = require('../controllers/Project')


router.post('/create',createProject)
router.get('/get',getAllProjects)
router.get('/:id/getTasks',getProjectTasks)

module.exports = router
















