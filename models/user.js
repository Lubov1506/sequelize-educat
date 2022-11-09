'use strict';
const {isAfter} = require('date-fns')
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate (models) {}
  }
  User.init(
    {
      firstName: {
        field: 'first_name',
        allowNull: false,
        type: DataTypes.STRING,
        validate:{
          notEmpty: true,
          notNull: true
        }
      },
      lastName: { 
        field: 'last_name',
        allowNull: false,
        type: DataTypes.STRING ,
        validate:{
          notEmpty: true,
          notNull: true
        }
      },
      email: { 
        allowNull: false,
        unique: true,
        type: DataTypes.STRING ,
        validate:{
          notEmpty: true,
          notNull: true,
          isEmail:true
        }
      },
      password: { 
        field: 'password_hash',
        allowNull: false,
        type: DataTypes.TEXT 
      },
      birthday: { 
        type: DataTypes.DATEONLY ,
        allowNull: false,
        validate:{
          notNull: true,
          isDate: true,
          isValidDate(value){
            if(isAfter(new Date(value), new Date())){
              throw new Error('can`t be after then today')
            }
          }
        }
      },
      gender: { 
        type: DataTypes.STRING 
      }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      underscored: true
    }
  );
  return User;
};
