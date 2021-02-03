import { createStore, combineReducers ,applyMiddleware} from 'redux'
import { userReducer } from './reducers/userReducer'
import { surveyReducer } from './reducers/surveyReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/rootSaga'

const saga= createSagaMiddleware()
const rootReducer = combineReducers({
    userInfo: userReducer,
    surveyData: surveyReducer
})

//REDUX DEV TOOLS for DEBUGGING

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(saga),
));




saga.run(rootSaga)
export default store