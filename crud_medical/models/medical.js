'use strict';
module.exports = (sequelize, DataTypes) => {
  var Medical = sequelize.define('Medical', {
    cholesterol: DataTypes.STRING,
    blood_sugar: DataTypes.STRING,
    blood_pressure: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  

  return Medical;
};