"use strict";
import { Model } from "sequelize";
module.exports = (sequelize, DataTypes) => {
  class Overview extends Model {
    static associate(models) {}
  }
  Overview.init(
    {
      code: DataTypes.STRING,
      area: DataTypes.STRING,
      type: DataTypes.STRING,
      target: DataTypes.STRING,
      created: DataTypes.DATE,
      expire: DataTypes.DATE,
      bonus: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Overview",
    }
  );
  return Overview;
};
