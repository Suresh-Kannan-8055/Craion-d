// Corrected relation mapping
const Product = require("./products");
const ProductVariant = require("./product_variants");
const ProductCategoryMaster = require("./product_category_master");
const cart = require("./cart");

ProductCategoryMaster.hasMany(Product, {
  foreignKey: "category_id",
  as: "products",
});
Product.belongsTo(ProductCategoryMaster, {
  foreignKey: "category_id",
  as: "category",
});
Product.hasMany(ProductVariant, { foreignKey: "product_id", as: "variants" });
ProductVariant.belongsTo(Product, { foreignKey: "product_id", as: "product" });
ProductVariant.hasMany(cart, { foreignKey: "product_id", as: "carts" });
cart.belongsTo(ProductVariant, {
  foreignKey: "product_id",
  as: "productVariant",
});
ProductCategoryMaster.hasMany(cart, { foreignKey: "category_id", as: "carts" });
cart.belongsTo(ProductCategoryMaster, {
  foreignKey: "category_id",
  as: "category",
});

module.exports = { Product, ProductVariant, ProductCategoryMaster };
