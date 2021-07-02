import request from '../utils/request';

const CLIENT_ID = 'nliCaBuoAAurkdwnWeD9oQGQrfa81tj4'
const CLIENT_SECRET = 'kKuOiuszjs2fOjGGH0RBskBAYA5n1j0rgxOcUdsUPex97DBISvDzCxu4NVClVnWu'

export default async function login(user: any): Promise<any> {
  let formBody = [];
  const body = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    audience: 'https://hiring.trois.in/api/v2/',
    scope: 'openid offline_access',
    grant_type: 'password',
    ...user
  }

  for (const property in body) {
    const encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(body[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }

  const encodedBody = formBody.join("&");

  try {
    const token = await request(`/oauth/token`,
      {
        method: 'POST',

        body: encodedBody,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      }

    );

    return token;
  } catch (error) {
    console.log(error);
  }
}
