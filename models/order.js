'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    phonoe: DataTypes.INTEGER,
    email: DataTypes.STRING,
    addres: DataTypes.STRING,
    medcheckresult: DataTypes.INTEGER
  });
  // Order.associate = function(models){
  //   Order.belongsTo(models.Medical)
  // }
  return Order;
};