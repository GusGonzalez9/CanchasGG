// import {SET_MY_CART, SET_CARTS, SET_SE} from '../constants'

// const initialFavoritesState = {
//     myCart: {},
//     list: [],
//     selectedCart: {}
// }

// export default (state = initialFavoritesState, action) => {
//     const newState = {... state}
//     switch(action.type){
//         case SET_FAVORITES:
//             newState.list = action.list
//         break
//         case ADD_FAVORITE:
//             newState.list = [...newState.list, action.favorite]
//         break
//         case REMOVE_FAVORITE:
//             newState.list = newState.list.filter(favorite => favorite.imdbID != action.id)
//         break
//         default:
//             return state
//     }
//     return newState
// } 