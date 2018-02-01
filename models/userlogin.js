'use strict';
module.exports = (sequelize, DataTypes) => {
  var userlogin = sequelize.define('userlogin', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return userlogin;
};