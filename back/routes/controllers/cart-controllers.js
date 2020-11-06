const {Order, Purchase, Product, User} = require('../../models')

const getCarts = (req, res, next) => {
    Purchase.findAll({
        where: {
            userId : 1,//req.user.id,
            status: 'completed'
        }
    })    
    .then(data => {res.send(data)})
    .catch(next)
}

// CART'S ROUTES
// Find or create currectCart for logged user
const hasCurrentCart = (req, res, next) => {
    Purchase.findOne({
        where: {
            userId: 1, //req.user.id,
            status: 'pending'
        }
    })
    .then(currentPurchase => {
        currentPurchase 
        ? (req.body.cart = currentPurchase, next())
        // : req.user.createPurchase()
        : User.findByPk(1).then(user => user.createPurchase())
        .then(purchase => {
                req.body.cart = purchase;
                next()
            })
    })
}
// Find single cart by id
const hasSingleCart = (req, res, next) => {
    Purchase.findByPk(req.params.id)
    .then(purchase => {
        purchase 
        ? (req.body.cart = purchase, next())
        : res.sendStatus(404)
    })
}
// Serve cart
const getSingleCart = (req, res, next) => {
    req.body.cart.getOrders({include: Product})
    .then(orders => res.send({purchase: req.body.cart, orders}))
    .catch(next)
}

// Submint cart
const submitCart = (req, res, next) => {
    Promise.all(
        req.body.prices.map(o => 
            Order.update({subtotal: o.subtotal}, {where: {id: o.id}})
        )
    )
    .then(() => {
        Purchase.findByPk(req.params.id)
        .then(purchase => purchase.update({
            total: req.body.total, 
            status: 'completed'
        }))
        .then(data => res.send(data))
    })
    .catch(next)
}

// ORDERS' ROUTES
const addProduct = (req, res, next) => {
    const {cartId, productId, units} = req.body
    Purchase.findByPk(cartId)
    .then(cart => cart.getOrders({where: {productId}, include:Product})
        .then(orders => {
            orders[0]
            ? orders[0].update({units}).then(order => res.status(200).send(order))
            : cart.createOrder({productId, units}).then(order => res.status(201).send(order))
        })
        .catch(next)
    )
} 
const updateProduct = (req, res, next) => {
    Order.findByPk = (req.params.id)
    .then(order => order.update(req.body))
    .then((data) => res.send(data))
    .catch(next)
}
const deleteProduct = (req, res, next) => {
    Order.findByPk(req.params.id)
    .then(order => order.destroy())
    .then(() => res.sendStatus(200))
    .catch(next)
}

module.exports = {
    getCarts,
    getSingleCart,
    hasCurrentCart,
    hasSingleCart,
    addProduct,
    updateProduct,
    deleteProduct,
    submitCart,
}