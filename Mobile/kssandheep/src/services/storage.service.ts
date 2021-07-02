import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getToken() {
  const value = await AsyncStorage.getItem('token');
  return value ? JSON.parse(value) : null;
}

export async function settoken(value: any) {
  return AsyncStorage.setItem('token', JSON.stringify(value));
}

export async function removetoken() {
  return AsyncStorage.removeItem('token');
}

export async function getAccessToken() {
  const token = await getToken();
  const accessToken = token ? token.access_token : null;

  return accessToken;
}

export async function getRefreshToken() {
  const token = await getToken();
  return token ? token.refresh_token : null;
}
