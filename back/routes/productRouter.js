const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

//viene con /api/prodcuts/->esta hoja AGUANTE BOCA

router.get("/", (req, res) => {
  console.log("api/poducts/barra");
  res.send("estas en prodcutos");
});

router.post("/create", (req, res) => {
  console.log(req.body);
  Product.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    stock: req.body.stock,
  }).then((prod) => {
    res.status(201).send(prod);
  });
});

module.exports = router;
