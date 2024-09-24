const express = require("express");
const dotenv = require("dotenv").config();
require("./config");
const cors = require('cors');
const bodyParser = require("body-parser");
const sequelize = require("./config/index");
const {
  Product,
  ProductVariant,
  ProductCategoryMaster,
} = require("./models/associations");

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome");
});

const router = require("./router/router");
app.use("/get", router);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server Running in port ${PORT}`);
});

sequelize.sync();
