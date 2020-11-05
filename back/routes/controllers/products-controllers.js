const { Product, Comment, Rate, Category } = require("../../models");

const getProducts = (req, res) => {
    Product.findAll().then((productos) => {
      res.send(productos);
    });
}

// SINGLE PRODUCT'S ROUTES
const getSingleProduct = (req, res, next) => {
    Product.findByPk(req.params.id, { include: [Comment, Rate, Category] })
    .then(data => res.send(data))
    .catch(next)
}
// -> util
const setCategories = (formCategories, product, res) => {
    const categories = formCategories 
        ? formCategories.split(',').map(c => Number(c))
        : null
    return categories
        ? product.setCategories(categories).then(() => res.status(201).send(product))
        : product.setCategories([]).then(() => res.status(201).send(product))
} 
// util <- 
const addSingleProduct = (req, res, next) => {
    const {name, description, price, stock, off, categories} = req.body
    Product.create({name, description, price, stock, off})
    .then(product => setCategories(categories, product, res))
    .catch(next)
}
const updateSingleProduct = (req, res, next) => {
    const {name, description, price, stock, off, categories} = req.body
    Product.findByPk(req.params.id)
    .then(product => product.update({name, description, price, stock, off}))
    .then(product => setCategories(categories, product, res))
    .catch(next)
}
const deleteSingleProduct = (req, res, next) => {
    Promise.all([
        Comment.destroy({where: {productId: req.params.id}}),
        Rate.destroy({where: {productId: req.params.id}}),
        Product.findByPk(req.params.id).then(user => {user.destroy()})
    ])
    .then(() => res.sendStatus(200))
    .catch(next)
}

// PRODUCT'S COMMENTS
const addComment = (req, res, next) => {
    // req.user.addComment()
    Comment.create({...req.body, productId: req.params.id})
    .then(data => res.status(201).send(data))
    .catch(next)
}
const deleteComment = (req, res, next) => {
    Comment.findByPk(req.body)
    .then(comment => comment.destroy())
    .then(data => res.send(data))
    .catch()
}

// PRODUCT'S RATES
const addRate = (req, res, next) => {
    // req.user.addComment()
    Rate.create({...req.body, productId: req.params.id})
    .then(data => res.status(201).send(data))
    .catch(next)
}
const deleteRate = (req, res, next) => {
    Rate.findByPk(req.body)
    .then(rate => rate.destroy())
    .then(data => res.send(data))
    .catch()
}

// USER'S ACCESS VALIDATIONS
const userValidation = (req, res, next) => {
    req.user ? next() : res.sendStatus(401)
}
const adminValidation = (req, res, next) => {
    req.user.access != 'basic' ? next() : res.sendStatus(401)
}

module.exports = {
    getProducts,
    getSingleProduct,
    addSingleProduct,
    updateSingleProduct,
    deleteSingleProduct,
    addComment,
    deleteComment,
    addRate,
    deleteRate,
    userValidation,
    adminValidation
}