"use strict";

const { DATE } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Pizza",
          category_id: 10,
          createdAt: new Date(),
          img_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oXZTqj2csZlVAKkc7LWSyc92Y9EgK8yI_g&s",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
