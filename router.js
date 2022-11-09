const { Router } = require('express');
const UserController = require('./controllers/User.controller');
const router = Router();

router.post('/user', UserController.createUser);
router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getUser);
router.delete('/users/:id', UserController.deleteUser);
router.put('users/:id', UserController.updateUser);

module.exports = router;
