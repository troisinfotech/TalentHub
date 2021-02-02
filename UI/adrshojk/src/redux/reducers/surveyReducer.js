import {ADD_DATA,DELETE_DATA,UPDATE_DATA} from '../../config/actionTypes'
export const surveyReducer =(state=[],action)=>{
    switch (action.type) {
        case ADD_DATA :{
            const {data} = action
            const newState ={
                id:state.length+1,
                place:data.place,
                description:data.description
            }
            return [
                ...state,
                newState
                ]
        }
        case DELETE_DATA :{
            const {id} = action
            return state.filter(newData=>newData.id!==id)
            
        }
        case UPDATE_DATA :{
            const {id,data}=action
            var temp = state
            temp[id-1]={
                ...data
            }
            return [
               ...temp
            ]
            
        }
        default:
            return state
    }
}