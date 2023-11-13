'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserLibrary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserLibrary.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
   
      UserLibrary.belongsTo(models.MangaVolume, {
        foreignKey: 'mangaId',
        as: 'mangaVolume',
      });
    }
  }
  UserLibrary.init({
    userId: DataTypes.INTEGER,
    mangaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserLibrary',
  });
  return UserLibrary;
};