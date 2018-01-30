'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu_medical = sequelize.define('Menu_medical', {
    menuId: DataTypes.INTEGER,
    medicalId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Menu_medical;
};