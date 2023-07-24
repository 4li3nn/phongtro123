"use strict";
import { Model } from "sequelize";
module.exports = (sequelize, DataTypes) => {
  class Label extends Model {
    static associate(models) {}
  }
  Label.init(
    {
      code: DataTypes.STRING,
      value: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Label",
    }
  );
  return Label;
};
