"use strict";
import { Model } from "sequelize";
module.exports = (sequelize, DataTypes) => {
  class Attribute extends Model {
    static associate(models) {}
  }
  Attribute.init(
    {
      price: DataTypes.STRING,
      acreage: DataTypes.STRING,
      published: DataTypes.STRING,
      hashtag: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Attribute",
    }
  );
  return Attribute;
};
