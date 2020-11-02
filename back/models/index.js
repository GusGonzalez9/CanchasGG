const db = require('../db')
const User = require('./User')
const Product = require('./Product')
const Image = require('./Image')
const Category =  require('./Category')
const Interaction = require('./Interaction')
const Purchase = require('./Purchase')
const Order = require('./Order')

// Product images
Product.hasMany(Image, {as: 'productId'})

// Product categories
Product.belongsToMany(Category, {through: 'product_category'})
Category.belongsToMany(Product, {through: 'product_category'})

// Product interactions
Product.belongsToMany(User, {through: Interaction})
User.belongsToMany(Product, {through: Interaction})

// Orders & purchases
Product.belongsToMany(Purchase, {through: Order})
Purchase.belongsToMany(Product, {through: Order})

// Users purchases
User.hasMany(Purchase)
Purchase.belongsTo(User)

module.exports = {db, User, Product, Image, Category, Interaction, Purchase}