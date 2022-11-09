'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId:{
        field: 'user_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName: 'users',
            key: 'id'
          }
        }
      },
      body: {
        allowNull: false,
        type: Sequelize.STRING
      },
      isDone: {
        allowNull: false,
        defaultValue: false,
        field: 'is_done',
        type: Sequelize.BOOLEAN
      },
      deadline: {
        type: Sequelize.DATEONLY
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tasks');
  }
};