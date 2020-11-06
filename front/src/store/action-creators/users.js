import {SET_ME, SET_USERS, SELECT_USER} from '../constants'
import axios from 'axios'

// SET_ME
const setMe = (me) => ({
    type: SET_ME,
    me
}) 

export const loginUser = (data) => dispatch => {
    return axios.post("/api/users/login", data)
    .then(res => dispatch(setMe(res.data)))
}

export const logoutUser = () => dispatch => {
    axios.post("/api/users/logout")
    .then(() => dispatch(setMe({})))
}

export const hiUser = () => dispatch => 
    axios.get('/api/users/me')
    .then(res => dispatch(setMe(res.data)))

// SET_USERS
const setUsers = (list) => ({
    type: SET_USERS,
    list
})

export const fetchUsers = () => dispatch => {
    axios.get('/api/users')
    .then(res => dispatch(setUsers(res.data)))
}

// SELECT_USER
const selectUser = (selectedUser) => ({
    type: SELECT_USER,
    selectedUser
})

export const fetchUser = (id) => dispatch => {
    axios.get(`/api/users/${id}`)
    .then(res => dispatch(selectUser(res.data)))
}

/* non dispatching axios requests */
export const registerUser = (user) => axios.post("/api/users", user)
  