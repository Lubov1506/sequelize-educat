const { Router } = require('express');
const GroupController = require('../controllers/Group.controller')

const groupRouter = Router();

groupRouter.post('/', GroupController.createUsersGroup)
groupRouter.get('/:userId', GroupController.getUserGroups)



module.exports = groupRouter