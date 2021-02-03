import {LOG_USER,LOGOUT_USER} from '../../config/actionTypes'
export const loginAction = (userInfo)=>({
    type:LOG_USER,
    payload:userInfo,
})
export const logoutAction = ()=>({
    type:LOGOUT_USER,
})