export const loginAction = (userInfo)=>({
    type:'LOGIN',
    payload:userInfo,
})
export const logoutAction = ()=>({
    type:'LOGOUT',
})