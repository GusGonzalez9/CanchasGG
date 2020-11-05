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
// Va currentCart.id por req.body.cartId + .productId + units
router.post('/orders', addProduct)

/*
PARA EL FRONT (para setear la URL a la que se hace el PUT o el DELETE)
const {currentCart} = this.porps
const {selectedProduct} = this.porps
isInCart(currentCart, selectedProduct.id)

const isInCart = (cart, productId) => {
    if (cart.orders[0]) {
        const order = cart.orders.filter(o => o.productId === productId)[0]
        return order ? order.id : false
    } else {
        return false
    }
} */
router.put('/orders/id', updateProduct)
router.delete('/orders/:id', deleteProduct)
router.get('/current', hasCurrentCart, getSingleCart)
router.get('/:id', hasSingleCart, getSingleCart)
router.put('/:id', submitCart) // req.body.prices && .total
/*  
    const [prices, total] = getValues(this.props.cart.orders)

    const getValues (orders) => {
        let total = 0
        const prices = orders.map( o=> {
            const subtotal = o.units * o.product.price
            total += subtotal 
            return { id: o.id, subtotal }
        })
        return [prices, total]
    }
        
*/

module.exports = router;