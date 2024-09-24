const { DataTypes } = require("sequelize");
const sequelize = require("../config/index"); // Ensure you import sequelize here.

  const cart = sequelize.define(
    "cart",
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
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },  
      total_price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
      },

    },

    {
      tableName: "cart",
      timestamps: true,
      createdAt: true,
      updatedAt: false,
    }
  );
  module.exports = cart;