const express = require('express')
const router = express.Router()
const {
    getCarts,
    getSingleCart,
    hasCurrentCart,
    hasSingleCart,
    addProduct,
    updateProduct,
    deleteProduct,
    submitCart,
} = require('./controllers/cart-controllers')

router.get('/', getCarts)
router.post('/orders', addProduct) // req.body = {cartId, productId, units}
router.put('/orders/:id', updateProduct)
router.delete('/orders/:id', deleteProduct)
router.get('/current', hasCurrentCart, getSingleCart)
router.get('/:id', hasSingleCart, getSingleCart)
router.put('/:id', submitCart) // req.body = {prices, total}

module.exports = router;