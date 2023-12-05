'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Mangas', 'status', {
      type: Sequelize.STRING,
      defaultValue: "En cours",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Mangas', 'status');
  }
};
