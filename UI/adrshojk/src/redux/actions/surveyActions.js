export const addAction = (data)=>({
    type:'ADD',
    payload:data,
})
export const deleteAction = (id)=>({
    type:'DELETE',
    payload:id
})
export const updateAction = (data)=>({
    type:'UPDATE',
    payload:data
})