import axios from 'axios'

const LoginUser = (user)=>{
    return {
        type: "LOGIN_USER",
        user:user
    }
}
const LogoutUser=(user)=>{
    return{
        type:"LOGOUT_USER",
        user:user
    }
};

export const registerUser= (data)=>dispatch=> axios.post("/api/users",data) 

export const loginUser = (data) => dispatch=> axios.post("/api/users/login",data).then(res => res.data).then((user)=> dispatch(LoginUser(user)))

export const logoutUser = (data)=>dispatch => axios.post("/api/users/logout",data).then(()=> dispatch(LogoutUser({})))

export const permanenceUser = ()=> dispatch=> axios.get("/api/users/me").then(res => res.data).then(user => dispatch(LoginUser(user)))


