'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Medicals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cholesterol: {
        type: Sequelize.STRING
      },
      blood_sugar: {
        type: Sequelize.STRING
      },
      blood_pressure: {
        type: Sequelize.STRING
      },
      gout_level: {
        type: Sequelize.STRING
      },
      lactose_intolerance: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Medicals');
  }
};