const { Router } = require('express');
const UserController = require('./controllers/User.controller');
const TaskController = require('./controllers/Task.controller');
const router = Router();

router.post('/users', UserController.createUser);
router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getUser);
router.delete('/users/:id', UserController.deleteUser);
router.put('/users/:id', UserController.updateUser);

router.post('/user/:id/task', TaskController.createTask)

module.exports = router;
