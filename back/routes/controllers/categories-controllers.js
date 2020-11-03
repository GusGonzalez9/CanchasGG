const Categories = require("../../models/Category");

const getCategories = (req, res, next) => {
    Categories.findAll()
    .then(data => res.status(200).send(data))
    .catch(next)
}

const addCategory = (req, res, next) => {
    Categories.create(req.body)
    .then(data => res.status(201).send(data))
    .catch(next)
}

const deleteCategory = (req, res, next) => {
    Categories.findByPk(req.params.id)
    .then(categorie => categorie.destroy())
    .then(categorie => res.status(200).send(categorie))
    .catch(next)
}

const getCategory = (req, res, next) => {
    Categories.findByPk(req.params.id)
    .then(data => res.send(data))
    .catch(next)
}

module.exports = {getCategories, addCategory, deleteCategory, getCategory}