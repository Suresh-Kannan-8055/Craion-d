const { DataTypes } = require("sequelize");
const sequelize = require("../config/index"); // Ensure you import sequelize here.

const product_category_master = sequelize.define(
  "product_category_master",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  },

  {
    tableName: "product_category_master",
    timestamps: true,
    createdAt: true,
    updatedAt: false,
  }
);
module.exports = product_category_master;
