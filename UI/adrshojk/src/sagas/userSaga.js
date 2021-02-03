import { takeEvery, call, put, all } from 'redux-saga/effects'
import { LOG_USER } from '../config/actionTypes'
import * as actions from '../redux/actions/userActions'
import * as service from '../sevices/userService'

function* logUser(data) {
    const user = yield call(service.logUser(data))
    yield put(actions.loginAction(user))
}

function* watchLogUser(data) {
    yield takeEvery(LOG_USER, logUser(data))
}
export function* userSaga(data) {
    yield all(
        [watchLogUser(data)]
    )
}