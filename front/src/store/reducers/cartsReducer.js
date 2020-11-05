import {SET_MY_CART, SET_CARTS, SELECT_CART, ADD_ORDER, REMOVE_ORDER} from '../constants'

const initialState = {
    myCart: {},
    list: [],
    selectedCart: {}
}

export default (state = initialState, action) => {
    const newState = {... state}
    switch(action.type){
        case SET_MY_CART:
            newState.myCart = action.myCart
        break
        case ADD_ORDER:
            newState.myCart.orders = [
                ... newState.myCart.orders.filter(o => 
                    o.id != action.order.id),
                action.order]
        break
        case REMOVE_ORDER:
            newState.myCart.orders = [
                ... newState.myCart.orders.filter(o => 
                    o.id != action.id)]
        break
        case SET_CARTS:
            newState.list = action.list
        break
        case SELECT_CART:
            newState.selectedCart = action.selectedCart
        break
        default:
            return state
    }
    return newState
} 