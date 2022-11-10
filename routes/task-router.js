const { Router } = require('express');
const TaskController = require('../controllers/Task.controller');
const { checkUser } = require('../mw/user.mw');


const taskRouter = Router();

taskRouter.post('/:id', checkUser, TaskController.createTask);
taskRouter.get('/:id', checkUser, TaskController.getUserTasks)

module.exports = taskRouter