const { VIRTUAL } = require('sequelize')
const S = require('sequelize')
const db = require('../db')
const Product = require('./Product')

class Order extends S.Model{}
Order.init(
    {
        units: {
            type: S.INTEGER,
            allowNull: false
        },
        subtotal: {
            type: S.VIRTUAL,
            get(){return Product.findByPk(this.productId * this.units)}
        },
    }, {sequelize: db, modelName: 'order'}
)

module.exports = Order