const S = require('sequelize')
const db = require('../db')

class Interaction extends S.Model{}
Interaction.init(
    {
        type: {
            type:S.ENUM({
                values: ['rate', 'comment']
              }),
            allowNull: false
        },
        content: {
            type:S.STRING,
            allowNull: false
        },
    }, {sequelize: db, modelName: 'interaction'}
)

module.exports = Interaction