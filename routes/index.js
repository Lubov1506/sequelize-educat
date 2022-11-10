const { Router } = require('express');
const userRouter = require('./user-router')
const taskRouter = require('./task-router')
const groupRouter = require('./group-router')

const router = Router()
router.use('/users', userRouter)
router.use('/tasks', taskRouter)
router.use('/groups', groupRouter)

module.exports = router;
