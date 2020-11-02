const S = require('sequelize')
const db = require('../db')

class Purchase extends S.Model{}
Purchase.init(
    {
        total: {
            type: S.NUMBER,
            allowNull: true
        },
        status: {
            type: S.ENUM({
                values: ['completed', 'pending']
            })
        }
    }, {sequelize: db, modelName: 'purchase'}
)

module.exports = Purchase