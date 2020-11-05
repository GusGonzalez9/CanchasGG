const {Order, Purchase, Product, User} = require('../../models')

const getCarts = (req, res, next) => {
    Purchase.findAll({
        where: {
            userId : req.user.id,
            status: 'complete'
        },
        include: Order,
    })    
    .then(data => {res.send(data)})
    .catch(next)
}

const hasCurrentCart = (req, res, next) => {
    Purchase.findOne({
        where: {
            userId: req.user.id,
            status: 'pending'
        }
    })
    .then(currentPurchase => {
        currentPurchase 
        ? (req.cart = currentPurchase, next())
        // : req.user
        : User.findByPk(2)
            .then(user => user.createPurchase())
            .then(purchase => {
                req.cart = purchase;
                next()
            })
    })
}

const addProduct = (req, res, next) => {
    const {productId, units} = req.body
    req.cart.getOrders({where: {productId}})
    .then(order => {
        order[0] 
        ? order[0].update({units}).then(data => res.send(data))
        : req.cart.createOrder({productId, units}).then(data => res.send(data))
    })
}

const getCurrentCart = (req, res, next) => {
    Purchase.findOne({
        where: {
            userId: 1, //req.user.id
            status: 'pending'
        }
    })
    .then(currentPurchase => {
        currentPurchase
        ? currentPurchase.getOrders({include: Product})
        .then(orders => {
            res.send({currentPurchase, orders})
        })
        : res.sendStatus(404)
    })
    .catch(next)
}

module.exports = {
    getCarts,
    getCurrentCart,
    hasCurrentCart,
    addProduct,
}