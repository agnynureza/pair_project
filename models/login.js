'use strict';
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  var Login = sequelize.define('Login', {
    email: {
      type      : DataTypes.STRING,
      validate  : {
        isEmail   : {msg: `column should be email format`},
        isNull(value, next) {
          if(value.length < 1) {
            next(`email should be filled`)
          } else {
            next()
          }
        }
      }
    },
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