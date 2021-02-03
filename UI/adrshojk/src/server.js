const express = require('express')
const axios = require('axios')
const cors = require('cors');
var qs = require('qs');
const app = express()
const port = 3005


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.post('/login', (req, res) => {
    console.log([req.body]);
    const username = req.body.username
    const password = req.body.password
    console.log({username});

    var data = qs.stringify({
        'grant_type': 'password',
        'client_id': 'nliCaBuoAAurkdwnWeD9oQGQrfa81tj4',
        'audience': 'https://hiring.trois.in/api/v2/',
        'username': username,
        'password': password,
        'scope': 'openid offline_access',
        'client_secret': 'kKuOiuszjs2fOjGGH0RBskBAYA5n1j0rgxOcUdsUPex97DBISvDzCxu4NVClVnWu',
    });
    var config = {
        method: 'post',
        url: 'https://trois.us.auth0.com/oauth/token',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cookie': '__cfduid=d971289341792afd825519421ec8d21fa1612020327; did=s%3Av0%3A61841f00-630f-11eb-8c60-3b211d1521a1.mEPCAzyWavnEJRNcRKbfAG4oqQYFN4MzLS7CM6wuidY; did_compat=s%3Av0%3A61841f00-630f-11eb-8c60-3b211d1521a1.mEPCAzyWavnEJRNcRKbfAG4oqQYFN4MzLS7CM6wuidY'
        },
        data: data
    };

    axios(config)
        .then(function (response) {

            var data = JSON.parse(JSON.stringify(response.data))
            const access_token = data.access_token
            var config2 = {
                method: 'get',
                url: 'https://trois.us.auth0.com/userinfo',
                headers: {
                    'token': '',
                    'Authorization': `Bearer ${access_token}`,
                    'Cookie': '__cfduid=d971289341792afd825519421ec8d21fa1612020327; did=s%3Av0%3A61841f00-630f-11eb-8c60-3b211d1521a1.mEPCAzyWavnEJRNcRKbfAG4oqQYFN4MzLS7CM6wuidY; did_compat=s%3Av0%3A61841f00-630f-11eb-8c60-3b211d1521a1.mEPCAzyWavnEJRNcRKbfAG4oqQYFN4MzLS7CM6wuidY'
                }
            };

            axios(config2)
                .then(function (response) {
                    const userInfo = JSON.stringify(response.data)
                    res.send({
                        'status':'success',
                        userInfo
                    })
                })
                .catch(function (error) {
                    res.send({
                        'status':'failure',
                        'message':'Check your email or password'
                    })
                });


        })
        .catch(function (error) {

            res.send(JSON.stringify({
                'status':'failure',
                'message':'Check your email or password'
            }))
        });


})



app.post('/userinfo', (req, res) => {

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})