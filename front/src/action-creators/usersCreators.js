import axios from 'axios'

const LogingUser = (user)=>{
    return {
        type: "LOGIN_USER",
        user:user
    }
}

export const registerUser= (data)=>dispatch=> axios.post("/api/users",data) 

export const loginUser = (data) => dispatch=> axios.post("/api/users/login",data).then(res => res.data).then((user)=> dispatch(LogingUser(user)))
