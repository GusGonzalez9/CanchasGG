const db = require('../db')
const User = require('./User')
const Product = require('./Product')
const Image = require('./Image')
const Category =  require('./Category')
const Comment = require('./Comment')
const Rate = require('./Rate')
const Purchase = require('./Purchase')
const Order = require('./Order')

// Products' images
Product.hasMany(Image, {as: 'productId'})

// Products' categories
Product.belongsToMany(Category, {through: 'product_category'})
Category.belongsToMany(Product, {through: 'product_category'})

// Products' comments
Product.hasMany(Comment)
Comment.belongsTo(User)
// Products' rates
Product.hasMany(Rate)
Rate.belongsTo(User)

// // Orders & purchases
Order.belongsTo(Product)
Order.belongsTo(Purchase)
Purchase.hasMany(Order)
Purchase.belongsTo(User)
User.hasMany(Purchase)

module.exports = {db, User, Product, Image, Category, Comment, Rate, Purchase}