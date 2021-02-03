import axios from 'axios'

export const logUser = (raw) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    return fetch("http://localhost:3005/login", requestOptions)
        .then(response => response.text())
        .then(result => {
            const userInfo = JSON.parse(result)
            // console.log({ userInfo });
            // dispatch(loginAction(userInfo))
            return userInfo
        }).catch(error => console.log('error', error));
}

export const refreshToken = () => {
    return axios({

        "method": "POST",
        "header": [],
        "body": {
            "mode": "urlencoded",
            "urlencoded": [
                {
                    "key": "grant_type",
                    "value": "refresh_token",
                    "type": "text"
                },
                {
                    "key": "client_id",
                    "value": "nliCaBuoAAurkdwnWeD9oQGQrfa81tj4",
                    "type": "text"
                },
                {
                    "key": "client_secret",
                    "value": "kKuOiuszjs2fOjGGH0RBskBAYA5n1j0rgxOcUdsUPex97DBISvDzCxu4NVClVnWu",
                    "type": "text"
                },
                {
                    "key": "refresh_token",
                    "value": "aD_w43-N2qVBAAhwsVDij6H1KxBDrht6IG3ZOFF2epsLV",
                    "type": "text"
                }
            ]
        },
        "url": "https://trois.us.auth0.com/oauth/token"

    })
}