const S = require('sequelize')
const db = require('../db')

class Purchase extends S.Model{}
Purchase.init(
    {
        status: {
            type: S.ENUM({
                values: ['completed', 'pending']
            })
        },
        total: {
            type: S.FLOAT,
            allowNull: true
        },
        adress: {
            type: S.TEXT,
            allowNull: false
        },
    }, {sequelize: db, modelName: 'purchase'}
)

module.exports = Purchase