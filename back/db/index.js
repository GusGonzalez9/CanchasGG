const Sequelize = require('sequelize')
const db = new Sequelize('postgres://postgres:gustihero@localhost:5433/ecommerce', {
    logging: false,
    dialect: 'postgres'
});

module.exports = db

