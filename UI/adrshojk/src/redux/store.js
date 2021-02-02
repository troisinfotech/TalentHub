import { createStore, combineReducers } from 'redux'
import { userReducer } from './reducers/userReducer'
import { surveyReducer } from './reducers/surveyReducer'

const rootReducer = combineReducers({
    userInfo: userReducer,
    surveyData: surveyReducer
})
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store