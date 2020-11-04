const { Product, Comment, Rate } = require("../models");

const getProducts = (req, res) => {
    Product.findAll().then((productos) => {
      res.send(productos);
    });
}

const addComment = (req, res, next) => {
    // req.user.addComment()
    Comment.create({...req.body, productId: req.params.id})
    .then(data => res.status(201).send(data))
    .catch(next)
}

const addRate = (req, res, next) => {
    // req.user.addComment()
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

const deleteSingleProduct = (req, res, next) => {
    Product.findByPk(req.params.id)
    .then(product => product.destroy())
    .then(data => res.status(200).send(data))
}

const userValidation = (req, res, next) => {
    req.user ? next() : res.sendStatus(401)
}

const adminValidation = (req, res, next) => {
    req.user.access != 'basic' ? next() : res.sendStatus(401)
}

module.exports = {getProducts, getSingleProduct, addSingleProduct, deleteSingleProduct, addComment, addRate, userValidation, adminValidation}