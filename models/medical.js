'use strict';
module.exports = (sequelize, DataTypes) => {
  var Medical = sequelize.define('Medical', {
    cholesterol: DataTypes.STRING,
    blood_sugar: DataTypes.STRING,
    blood_pressure: DataTypes.STRING,
    orderId: DataTypes.INTEGER
  });
  Medical.associate = function (models) {
    // ...associate the models
    Medical.belongsToMany(models.Menu,{through: 'Menu_medical'});
  };
  
  return Medical;
};