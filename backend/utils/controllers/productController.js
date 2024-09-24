const Product = require("../../models/products");
const ProductVariant = require("../../models/product_variants");
const Catagory = require("../../models/product_category_master");

const Getcatagory = async (req, res) => {
  const category = req.params.category;
  try {
    let getcatagory;
    if (category == "all") {
      getcatagory = await Product.findAll({
        include: [
          {
            model: ProductVariant,
            as: "variants",
            order: [["id", "ASC"]],
          },
        ],
      });
    } else {
      getcatagory = await Product.findAll({
        where: { category_id: category },
        include: [
          {
            model: ProductVariant,
            as: "variants",
            order: [["id", "ASC"]],
          },
        ],
      });
    }

    console.log(getcatagory);
    return res.json(getcatagory);
  } catch (error) {
    console.error("Error fetching category and products:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { Getcatagory };
