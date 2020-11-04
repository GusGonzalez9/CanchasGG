
const Category = require("../../models/Category");

const getCategories = (req, res, next) => {
    Category.findAll()
    .then(data => res.status(200).send(data))
    .catch(next)
}

const addCategory = (req, res, next) => {
    Category.create(req.body)
    .then(data => res.status(201).send(data))
    .catch(next)
}

const updateCategory = (req, res, next) => {
    Category.findByPk(req.params.id)
    .then(category => category.update(req.body))
    .then(data => res.status(200).send(data))
    .catch(next)
}

const deleteCategory = (req, res, next) => {
    Category.findByPk(req.params.id)
    .then(categorie => categorie.destroy())
    .then(categorie => res.status(200).send(categorie))
    .catch(next)
}

const getSingleCategory = (req, res, next) => {
    Category.findByPk(req.params.id)
    .then(data => res.send(data))
    .catch(next)
}

module.exports = {
    getCategories,
    addCategory,
    deleteCategory,
    getSingleCategory,
    updateCategory
}