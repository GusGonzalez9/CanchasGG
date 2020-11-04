const { Product, Comment, Rate } = require("../models");

const getProducts = (req, res) => {
    Product.findAll().then((productos) => {
      res.send(productos);
    });
}

const addComment = (req, res, next) => {
    // req.user
    Comment.create({...req.body, productId: req.params.id})
    .then(data => res.status(201).send(data))
    .catch(next)
}

const addRate = (req, res, next) => {
    // req.user
    Rate.create({...req.body, productId: req.params.id})
    .then(data => res.status(201).send(data))
    .catch(next)
}

const getSingleProduct = (req, res, next) => {
    Product.findByPk(req.params.id, { include: [Comment, Rate] })
    .then(data => res.send(data))
    .catch(next)
}

const addSingleProduct = (req, res, next) => {
    Product.create(req.body)
    .then(prod => res.status(201).send(prod))
    .catch(next)
}

const userValidation = (req, res, next) => {
    req.user ? next() : res.sendStatus(401)
}

module.exports = {getProducts, getSingleProduct, addSingleProduct, addComment, addRate, userValidation}