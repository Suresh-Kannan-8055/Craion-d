'use strict';

module.exports = {
  up:async (queryInterface, Sequelize) =>{
    
     await queryInterface.bulkInsert('product_category_master', [{
      name: 'John Doe',
      is_active: false,
      createdAt:new Date(),
     }], {});
    
  },

  down:async (queryInterface, Sequelize)=> {
    
    await queryInterface.bulkDelete('product_category_master', null, {});
  }
};