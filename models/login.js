'use strict';
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  var Login = sequelize.define('Login', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });
  Login.beforeCreate(function(datauser){
    const saltRounds = 10;
    const myPlaintextPassword = datauser.password;
    return bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {
      // Store hash in your password DB.
      datauser.password=hash
  });
  })
  return Login;
};