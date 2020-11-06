import {SET_MY_CART, SET_CARTS, SELECT_CART, ADD_ORDER, REMOVE_ORDER} from '../constants'
import axios from 'axios'

// SET_MY_CART
export const setMyCart = (myCart) => ({
    type: SET_MY_CART,
    myCart,
})
export const fetchMyCart = () => dispatch => {
    axios.get('/api/carts/current')
    .then(res => dispatch(setMyCart(res.data)))
}

// ADD_ORDER
const addOrderToMyCart = (order) => ({
    type: ADD_ORDER,
    order
})
export const addOrder = (cartId, productId, units) => dispatch => {
    axios.post('/api/carts/orders', {cartId, productId, units})
    .then(res => dispatch(addOrderToMyCart(res.data)))
}

// REMOVE_ORDER
const removeOrderFromMyCart = (id) => ({
    type: REMOVE_ORDER,
    id
})
export const removeOrder = (id) => {
    axios.delete(`/api/carts/orders/${id}`)
    .then(() => dispatch(removeOrderFromMyCart(id)))
}

// SET_CARTS que se borre cuando se deslogea
export const setCarts = (list) => ({
    type: SET_CARTS,
    list,
})

export const fetchCarts = () => dispatch => {
    axios.get('/api/carts/')
    .then(res => dispatch(setCarts(res.data)))
}

// SELECT_CART
const selectCart = (selectedCart) => ({
    type: SELECT_CART,
    selectedCart,
})

export const fetchSelectedCart = id => dispatch => {
    axios.get(`/api/carts/${id}`)
    .then(res => dispatch(selectCart(res.data)))
}