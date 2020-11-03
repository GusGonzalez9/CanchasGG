const express = require("express");
const router = express.Router();
const { Product, Comment } = require("../models");

//viene con /api/prodcuts/->esta hoja AGUANTE BOCA

router.get("/", (req, res) => {
  Product.findAll().then((productos) => {
    res.send(productos);
  });
});

router.post("/:id/comments", (req, res, next) => {
  const id = req.params.id;
  req.user
    ? req.user
        .addComment(req.body)
        .then((comment) => {
          comment.setProduct(id);
        })
        .then(() => {
          res.sendStatus(201);
        })
    : res.sendStatus(401);
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  Product.findByPk(id).then((product) => {
    product.getComments().then((comments) => {
      product.getRates().then((rates) => {
        res.send({ product, comments, rates });
      });
    });
  });
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
