'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    fat: DataTypes.STRING,
    protein: DataTypes.STRING,
    carbohidrate: DataTypes.STRING,
    calories: DataTypes.STRING,
    cholesterol: {
      type:DataTypes.STRING,
      validate:{
        isNull(input,next){
          if(input.length <1){
            next('must be filled!!')
          }else{
            next()
          }
        },
        isGoodBad(value) {
          if (value != 'good' && value != 'bad') {
            throw new Error('Only good or bad!')
          }
        }
        }
     },
    blood_sugar: {
      type:DataTypes.STRING,
      validate:{
        isNull(input,next){
          if(input.length <1){
            next('must be filled!!')
          }else{
            next()
          }
        },
        isGoodBad(value) {
          if (value != 'good' && value != 'bad') {
            throw new Error('Only good or bad!')
          }
        }
      }
    },
    blood_pressure:{
      type:DataTypes.STRING,
      validate:{
        isNull(input,next){
          if(input.length <1){
            next('must be filled!!')
          }else{
            next()
          }
        },
        isGoodBad(value) {
          if (value != 'good' && value != 'bad') {
            throw new Error('Only good or bad!')
          }
        }
        }
      }
  });
  Menu.associate = function (models) {
    // ...associate the models
    // Menu.belongsToMany(models.Medicals,{through: 'Menu_medical'});
  };
  return Menu;
};