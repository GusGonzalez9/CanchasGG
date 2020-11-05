import { combineReducers } from 'redux'
// import cartsReducer from './favoritesReducer'
import productsReducer from './productsReducer'
import usersReducer from './usersReducer'

export default combineReducers({
    products: productsReducer,
    users: usersReducer,
    // carts: cartsReducer,
})