'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Manga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Manga.hasMany(models.MangaVolume, { foreignKey: 'mangaId' });
    }
  }
  
  Manga.init({
    title: DataTypes.STRING,
    theme: DataTypes.STRING,
    description: DataTypes.STRING,
    author: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Manga',
  });

  return Manga;
};
