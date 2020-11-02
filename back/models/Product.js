const S = require('sequelize')
const db = require('../db')
const Interaction = require('./Interaction')

class Product extends S.Model{}
Product.init(
    {
        name: {
            type:S.STRING,
            allowNull: false
        },
        description: {
            type:S.TEXT,
            allowNull: true
        },
        price: {
            type: S.NUMBER,
            allowNull: false,
            get(){
                return `$ ${this.getDataValue('price')}`
            }
        },
        stock: {
            type: S.INTEGER,
            allowNull: false
        },
        off: {
            type: S.INTEGER,
            defaultValue: 0,
        },
    }, {sequelize: db, modelName: 'product'}
)

Product.prototype.getRate = function(){
    Interaction.findAll({where: {'productId': this.id, type:'rate'}})
        .then(data => {
            let rate = 0    
            data.forEach(e => {rate += e.content})
            return rate / data.length
        })
}

module.exports = Product