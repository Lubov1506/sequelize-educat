const { Router } = require('express');
const TaskController = require('../controllers/Task.controller');
const { checkUser } = require('../mw/user.mw');


const taskRouter = Router();

taskRouter.post('/user/:id/task', checkUser, TaskController.createTask);
taskRouter.get('/users/:id', checkUser, TaskController.getUserTasks)

module.exports = taskRouter