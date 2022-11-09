const { Router } = require('express');
const UserController = require('./controllers/User.controller');
const TaskController = require('./controllers/Task.controller');
const router = Router();
const {checkUser} = require('./mw/user.mw')
router.post('/users', UserController.createUser);
router.get('/users', UserController.getAllUsers);
//router.get('/users/:id', UserController.getUser);
router.delete('/users/:id', UserController.deleteUser);
router.put('/users/:id',checkUser, UserController.updateUserInstance);

router.post('/user/:id/task',checkUser, TaskController.createTask)
router.get('/users/:id', checkUser, TaskController.getUserTasks)

module.exports = router;
