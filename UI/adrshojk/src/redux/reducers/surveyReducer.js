export const surveyReducer =(state=[],action)=>{
    switch (action.type) {
        case 'ADD' :{
            return [
                ...state,
                {id:action.payload.id,
                userInfo:action.payload}
                ]
        }
        case 'DELETE' :{
            return {
            }
        }
        case 'UPDATE' :{
            return {
            }
        }
        default:
            return state
    }
}