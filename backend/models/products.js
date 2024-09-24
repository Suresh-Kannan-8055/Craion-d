const { DataTypes } = require("sequelize");
const sequelize = require("../config/index");
const product_category_master = require("./product_category_master");

const products = sequelize.define(
  "products",
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
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    img_url: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },

  {
    tableName: "products",
    timestamps: true,
    createdAt: true,
    updatedAt: false,
  }
);
module.exports = products;
