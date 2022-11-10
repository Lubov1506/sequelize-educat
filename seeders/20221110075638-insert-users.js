'use strict';
const _ = require('lodash')
/** @type {import('sequelize-cli').Migration} */

const generateUser = (key) =>({
  first_name: `Name${key}`,
  last_name: `Surname${key}`,
  email: `test${key}@example.com`,
  password_hash: 'Test2134',
  birthday: new Date(2000,0,key),
  gender: ['male', 'female', 'NB'][_.random(0,2,false)],
  created_at: new Date,
  updated_at
  })
const generateUsers  = (amount=50) =>{
  return new Array(amount).fill(null).map((el, i)=>generateUser(i))
}
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', generateUsers(120))
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
