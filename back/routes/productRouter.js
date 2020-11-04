const express = require("express");
const router = express.Router();
const { Product, Comment, Rate } = require("../models");

router.get("/", (req, res) => {
  Product.findAll().then((productos) => {
    res.send(productos);
  });
});

router.post("/:id/comments", (req, res, next) => {
  // req.user
  //   ? req.user
        Comment.create({...req.body, productId: req.params.id})
        .then(data => res.status(201).send(data))
        .catch(next)
  //   : res.sendStatus(401);
});

router.post("/:id/rates", (req, res, next) => {
  // req.user
  //   ? req.user
        Rate.create({...req.body, productId: req.params.id})
        .then(data => res.status(201).send(data))
        .catch(next)
  //   : res.sendStatus(401);
});

router.get("/:id", (req, res, next) => {
  Product.findByPk(req.params.id, { include: [Comment, Rate] })
  .then(data => res.send(data))
  .catch(next)
});

router.post("/", (req, res) => {
  Product.create(req.body)
  .then(prod => res.status(201).send(prod))
  .catch(next)
});

module.exports = router;
