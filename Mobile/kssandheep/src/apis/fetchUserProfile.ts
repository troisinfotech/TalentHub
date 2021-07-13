import { getAccessToken } from '../services/storage.service';
import request from '../utils/request';

export default async function fetchUserProfile() {

  const accessToken = await getAccessToken();
  try {
    const userProfile = await request(`/userinfo`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        }
      }
    );

    return userProfile;
  } catch (error) {
    console.log(error);
  }
}
