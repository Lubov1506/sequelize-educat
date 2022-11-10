'use strict';
const {User} = require('../models')
const _ = require('lodash')

/** @type {import('sequelize-cli').Migration} */

const generateTasks = async () =>{
  const users = await User.findAll({
    attributes: ['id']
  })  
  const tasks = users.map((u,i) =>{
    new Array(_.random(1,10,false)).fill(null).map((t,i)=>({
      user_id: u.id,
      body: `TextBody${i}`,
      created_at: new Date(),
      updated_at: new Date()
    }))
  })
  return tasks
}


module.exports = {
  async up (queryInterface, Sequelize) {
 await queryInterface.bulkInsert('tasks', generateTasks())
  },

  async down (queryInterface, Sequelize) {

  }
};
