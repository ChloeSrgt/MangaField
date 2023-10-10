"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Mangas",
      [
        {
          title: "Spy x Family tome 11",
          image: "https://assets.bubblebd.com/img/ecdk49yphx/acdwslh0ep.jpg",
          description: "Une description pour Spy x Family tome 11.",
          releaseDate: new Date('2022-05-01'),
          author: "Auteur de Spy x Family",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "One Piece tome 105",
          image: "https://assets.bubblebd.com/img/bvkidu3kqh/0zlechycxu.jpg",
          description: "Une description pour Spy x Family tome 11.",
          releaseDate: new Date('2022-05-01'),
          author: "Auteur de Spy x Family",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Dr. Stone tome 26",
          image: "https://assets.bubblebd.com/img/hstb6n8h40/pxsf4a11o3.jpg",
          description: "Une description pour Spy x Family tome 11.",
          releaseDate: new Date('2022-05-01'),
          author: "Auteur de Spy x Family",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Chainsaw Man tome 13",
          image: "https://assets.bubblebd.com/img/ch2ol3pcps/jfcan2nao5.jpg",
          description: "Une description pour Spy x Family tome 11.",
          releaseDate: new Date('2022-05-01'),
          author: "Auteur de Spy x Family",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Jujutsu Kaisen tome 21",
          image: "https://assets.bubblebd.com/img/0b37cvz8k3/4ks3o99cq7.jpg",
          description: "Une description pour Spy x Family tome 11.",
          releaseDate: new Date('2022-05-01'),
          author: "Auteur de Spy x Family",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Oshi No Ko tome 8",
          image: "https://assets.bubblebd.com/img/llpbhr7ppv/bmzeeie9ef.jpg",
          description: "Une description pour Spy x Family tome 11.",
          releaseDate: new Date('2022-05-01'),
          author: "Auteur de Spy x Family",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Mangas", null, {});
  },
};
