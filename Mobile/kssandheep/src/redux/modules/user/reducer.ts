import { UserState } from './interface';
import types from './types';

export const initialState: UserState = {
  isLoggedIn: false,

};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true
      }
    case types.LOGOUT_FAIL:
      console.log(`login error`, action)
      return {
        ...state,
        loginError: action.loginError

      }
    case types.GET_USER_PROFILE_SUCCESS:

      return {
        ...state,
        profile: action.userProfile
      }
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false
      }
    default:
      return state;
  }
}

export default reducer;