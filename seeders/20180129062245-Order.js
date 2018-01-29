'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Orders', [{
      name: 'John Doe',
      age: 20,
      gender: 'male',
      phonoe:123412,
      email:'john@rocketmail.com',
      addres: 'pondok indah raya no 7',
      medcheckresult:2,
      createdAt: new Date(),
      updatedAt: new Date ()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
