'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("MangaVolumes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING(1000),
      },
      releaseDate: {
        type: Sequelize.DATE,
      },
      description: {
        type: Sequelize.STRING(1000),
      },
      image: {
        type: Sequelize.STRING(1000),
      },
      mangaId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Mangas",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("MangaVolumes");
  },
};
