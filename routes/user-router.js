const { Router } = require('express');
const UserController = require('../controllers/User.controller');
const { checkUser } = require('../mw/user.mw');


const userRouter = Router();

userRouter.post('/users', UserController.createUser);
userRouter.get('/users', UserController.getAllUsers);
userRouter.get('/users/:id', UserController.getUser);
userRouter.delete('/users/:id', UserController.deleteUser);
userRouter.put('/users/:id', checkUser, UserController.updateUserInstance);

module.exports = userRouter
