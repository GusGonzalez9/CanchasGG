import {SET_ME, SET_USERS, SELECT_USER} from '../constants'

const initialState = {
    me: {},
    list: [],
    selectedUser: {},
}

export default (state = initialState, action) => {
    const newState = {... state}
    switch(action.type){
        case SET_ME:
            newState.me = action.me
        break
        case SET_USERS:
            newState.list = action.list
        break
        case SELECT_USER:
            newState.selectedUser = action.selectedUser
        break
        default:
            return state
    }
    return newState
} 