const getRate = (rates) => {
  let sum = 0;
  rates.forEach((e) => {
    sum += e.content;
  });
  return sum / data.length;
};

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
}
*/

/*  
PARA SUBMITEAR EL CARRITO
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