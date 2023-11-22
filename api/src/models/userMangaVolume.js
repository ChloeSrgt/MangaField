"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class UserMangaVolume extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserMangaVolume.belongsTo(models.User, { foreignKey: "userId" });
      UserMangaVolume.belongsTo(models.MangaVolume, {
        foreignKey: "mangaVolumeId",
      });
    }
  }

  UserMangaVolume.init(
    {},
    {
      sequelize,
      modelName: "UserMangaVolume",
    }
  );

  return UserMangaVolume;
};
