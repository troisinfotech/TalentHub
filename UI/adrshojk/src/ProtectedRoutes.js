import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {connect} from 'react-redux'
const ProtectedRoutes = (props) => {
    if(props.isLoggedIn){

        return (
            <Route {...props}/>
        )
    }else{
        return <Redirect to='/login' />
    }
}
const mapStateToProps = (state) => {
    console.log({state},'protected route');
    const permission =state.userInfo.isLoggedIn
    return {
        isLoggedIn: permission
    }
}

export default connect(mapStateToProps)(ProtectedRoutes)
