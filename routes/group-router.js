const { Router } = require('express');
const GroupController = require('../controllers/Group.controller')
const multer = require('multer')
const {STATIC_PATH} = require('../config')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, STATIC_PATH)
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, `${Date.now()}.${file.originalName}`)
    }
  })

const upload = multer({storage });

const groupRouter = Router();

groupRouter.post('/', GroupController.createUsersGroup)
groupRouter.patch('/:groupId/image', upload.single('image'), GroupController.createImage)
groupRouter.get('/:userId', GroupController.getUserGroups)
groupRouter.get('/:groupId', GroupController.addUserGroup)



module.exports = groupRouter