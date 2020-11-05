const express = require('express')
const router = express.Router()
const {
    getCarts,
    getCurrentCart,
    hasCurrentCart,
    addProduct,
} = require('./controllers/cart-controllers')

router.get('/', getCarts)
router.get('/current', getCurrentCart)
router.post('/orders', hasCurrentCart, addProduct)
router.get('/check', (req, res, net) => {res.send(req.user)})


module.exports = router;