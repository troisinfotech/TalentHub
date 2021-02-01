export const userReducer =(state={isLoggedIn:false},action)=>{
    switch (action.type) {
        case 'LOGIN' :{
            return {
                isLoggedIn:true,
                userInfo:action.payload
            }
        }
        case 'LOGOUT' :{
            return {
                isLoggedIn:false
            }
        }
        default:
            return state
    }
}