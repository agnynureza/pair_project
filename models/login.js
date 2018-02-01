'use strict';
module.exports = (sequelize, DataTypes) => {
  var Login = sequelize.define('Login', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Login;
};