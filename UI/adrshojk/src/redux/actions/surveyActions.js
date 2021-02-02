import {ADD_DATA,DELETE_DATA,UPDATE_DATA} from '../../config/actionTypes'
export const addAction = (data)=>({
    type:ADD_DATA,
    data,
})
export const deleteAction = (id)=>({
    type:DELETE_DATA,
    id
})
export const updateAction = (data,id)=>({
    type:UPDATE_DATA,
    data,id
})