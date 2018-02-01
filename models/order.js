'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    addres: DataTypes.STRING,
    medcheckresult: DataTypes.INTEGER,
    phone: DataTypes.STRING,
  });
  // Order.associate = function(models){
  //   Order.belongsTo(models.Medical)
  // }
  return Order;
};