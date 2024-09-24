"use strict";

const { DataTypes } = require("sequelize");
const products = require("../models/products");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("product_variants", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "products" ,
          key: "id",
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
      },
    });
  },

   down:async(queryInterface, Sequelize)=>{
    await queryInterface.dropTable("product_variants");
  },
};
