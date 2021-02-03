import {LOG_USER,LOGOUT_USER} from '../../config/actionTypes'
export const userReducer =(state={isLoggedIn:false},action)=>{
    switch (action.type) {
        case LOG_USER :{
            return {
                isLoggedIn:true,
                userInfo:action.payload
            }
        }
        case LOGOUT_USER :{
            return {
                isLoggedIn:false
            }
        }
        default:
            return state
    }
}