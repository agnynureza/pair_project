'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    fat: DataTypes.STRING,
    protein: DataTypes.STRING,
    carbohidrate: DataTypes.STRING,
    calories: DataTypes.STRING,
    fiber: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Menu;
};