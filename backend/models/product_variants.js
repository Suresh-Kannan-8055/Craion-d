const { DataTypes } = require("sequelize");
const sequelize = require("../config/index"); // Ensure you import sequelize here.

const product_variants = sequelize.define(
  "product_variants",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },

  {
    tableName: "product_variants",
    timestamps: true,
    createdAt: true,
    updatedAt: false,
  }
);
module.exports = product_variants;
