'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('kaka', salt);

    await queryInterface.bulkInsert('Users', [{
      userName: 'blabla',
      firstName: 'C',
      lastName: 'S',
      email: 'c.s@srgt.com',
      password: hashedPassword, 
      avatarURL: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
