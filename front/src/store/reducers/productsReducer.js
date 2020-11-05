import {SET_LIST, SELECT_PRODUCT} from '../constants'

const initialState = {
    productsList: [],
    offList: [],
    selectedProduct: {},
}

export default (state = initialState, action) => {
    const newState = {... state}
    switch(action.type){
        case SET_LIST:
            newState[action.list] = action.products
        break
        case SELECT_PRODUCT:
            newState.selectedProduct = action.selectedProduct
        break
        default:
            return state
    }
    return newState
} 
