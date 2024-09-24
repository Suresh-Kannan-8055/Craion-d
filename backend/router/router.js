const express = require("express");
const router = express.Router();
const Controller = require("../utils/controllers/productController");
const Controlleradd = require("../utils/controllers/postcontrollers");

router.get("/getcatagory/:category", Controller.Getcatagory);
router.post("/insert",Controlleradd.addCart)


module.exports = router;
