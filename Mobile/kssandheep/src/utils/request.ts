import axios, { AxiosError } from 'axios';
import { getAccessToken, getRefreshToken, getToken, removetoken, settoken } from '../services/storage.service';
const DOMAIN = 'https://trois.us.auth0.com'

function isApiEndpoint(url: string) {
  var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return !!pattern.test(url);
}

const request = (url: string, params?: any) => {
  if (!params) {
    params = {};
  }
  const uri = isApiEndpoint(url) ? url : DOMAIN + url;


  axios.interceptors.response.use(
    (response) => response,
    (error) => {

      return new Promise(async (resolve, reject) => {
        const originalReq = error.config;
        const refreshToken = await getRefreshToken();

        console.log(`error.config`, error.config)
        console.log(`refreshToken---`, refreshToken)
        // error.response is undefined, need to check the status code in error message

        if (refreshToken && error.config && !error.config.__isRetryRequest && error.toString().includes("401")) {
          originalReq._retry = true;

          const body: any = {
            refresh_token: refreshToken,
            grant_type: 'refresh_token',
            client_id: 'nliCaBuoAAurkdwnWeD9oQGQrfa81tj4',
            client_secret: 'kKuOiuszjs2fOjGGH0RBskBAYA5n1j0rgxOcUdsUPex97DBISvDzCxu4NVClVnWu',
          }

          let formBody = [];

          for (const property in body) {
            const encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(body[property]);
            formBody.push(encodedKey + "=" + encodedValue);
          }


          const encodedBody = formBody.join("&");

          console.log(`encodedBody`, encodedBody)

          let res = fetch(`${DOMAIN}/oauth/token`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: encodedBody,
          }).then(res => res.json()).then(res => {
            if (res.access_token) {
              settoken(res)
              originalReq.headers['Authorization'] = `Bearer ${res.access_token}`;

              return axios(originalReq);
            } else {
              removetoken();
            }

            return;

          });


          resolve(res);
        }

        return reject(error);
      });

    }
  );


  const accessToken = getAccessToken();

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    ...params.headers
  };
  const method = params.method || 'GET';
  const others = {};


  return axios({
    method,
    url: uri,
    data:
      method === 'PATCH' ||
        method === 'POST' ||
        method === 'PUT' ||
        method === 'DELETE'
        ? params.body
        : undefined,
    params: method === 'GET' ? params.body : undefined,
    headers,
    ...others
  })

    .then((response) => {

      // console.log(`response`, response.data)

      return response.data;
    });
};

export default request;
