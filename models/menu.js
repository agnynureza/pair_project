'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    fat: DataTypes.STRING,
    protein: DataTypes.STRING,
    carbohidrate: DataTypes.STRING,
    calories: DataTypes.STRING,
    cholesterol: {
      type:DataTypes.STRING,
      validate:{
        notEmpty: {
          args: true,
          msg: 'must be filled !!'
          },
        isAlpha:{
          args:true,
          msg : 'letter only!'
          }
        }
     },
    blood_sugar: {
      type:DataTypes.STRING,
      validate:{
        notEmpty: {
          args: true,
          msg: 'must be filled !!'
          },
        isAlpha:{
          args:true,
          msg : 'letter only!'
          }
        }
      },
    blood_pressure:{
      type:DataTypes.STRING,
      validate:{
        notEmpty: {
          args: true,
          msg: 'must be filled !!'
          },
        isAlpha:{
          args:true,
          msg : 'letter only!'
          }
        }
      }
  });
  Menu.associate = function (models) {
    // ...associate the models
    Menu.belongsToMany(models.Medicals,{through: 'Menu_medical'});
  };
  return Menu;
};