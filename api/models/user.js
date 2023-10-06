"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.belongsToMany(models.Manga, { through: 'userLibrary', foreignKey: 'userId' });
    }
  }
  
  user.init(
    {
      userName: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING, 
      avatarURL: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
    }
  );

  return user;
};
