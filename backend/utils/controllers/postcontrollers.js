const Cart = require("../../models/cart");

const addCart = async (req, res) => {
  try {
    const cartItems = req.body;
    const insertedItems = await Cart.bulkCreate(cartItems, {
      fields: ["product_id", "category_id", "quantity", "total_price"],
    });

    res.status(201).json(insertedItems);
  } catch (error) {
    console.error("Error inserting cart items:", error);
    res.status(500).send("Error inserting cart items");
  }
};

module.exports = { addCart };
