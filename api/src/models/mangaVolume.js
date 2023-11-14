'use strict';
const {
  Model, DataTypes
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MangaVolume extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MangaVolume.belongsTo(models.Manga, { foreignKey: 'mangaId' });
    }    
  }
  
  MangaVolume.init({
    title: DataTypes.STRING,
    releaseDate: DataTypes.DATE,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'MangaVolume',
  });

  

  return MangaVolume;
};
