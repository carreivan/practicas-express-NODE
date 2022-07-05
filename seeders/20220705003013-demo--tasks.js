'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Tasks', [{
       name: 'Batata',
       createdAt: new Date(),
       updatedAt: new Date()
       }, {
       name: 'Maça',
       createdAt: new Date(),
       updatedAt: new Date()
       }, {
       name: 'Mel',
       createdAt: new Date(),
       updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
