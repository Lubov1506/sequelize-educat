'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate (models) {
      Task.belongsTo(models.User, {
        foreignKey: 'userId'
      })
    }
  }
  Task.init(
    {
      userId: {

      },
      body: {
        allowNull: false,
        type: DataTypes.STRING,
        validate:{
          notEmpty:true
        }
      },
      isDone: {
        allowNull: false,
        field: 'is_done',
        type: DataTypes.BOOLEAN
      },
      deadline: {
        type: DataTypes.DATEONLY,
        validate:{
          isDate: true
        }
      }
    },
    {
      sequelize,
      modelName: 'Task',
      tableName: 'tasks',
      underscored: true
    }
  );
  return Task;
};
