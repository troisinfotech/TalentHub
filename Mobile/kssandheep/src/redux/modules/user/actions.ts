import types from './types';

export const login = (user: any) => ({
  'type': types.LOGIN_REQUEST,
  user
});

export const loginSuccess = () => ({
  'type': types.LOGIN_SUCCESS,
});

export const loginFailure = (loginError: any) => ({
  'type': types.LOGOUT_FAIL,
  loginError
});

export const getUserProfile = () => ({
  'type': types.GET_USER_PROFILE_REQUEST,
});

export const getUserProfileSuccess = (userProfile: any) => ({
  'type': types.GET_USER_PROFILE_SUCCESS,
  userProfile
});

export const logout = () => ({
  'type': types.LOGOUT_REQUEST,
});
export const logoutSuccess = () => ({
  'type': types.LOGOUT_SUCCESS,
});

