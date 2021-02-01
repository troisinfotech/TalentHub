import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
    login: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.primary,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: theme.palette.success.light,

    },
}));

export const Login = () => {
    const classes = useStyles();

    const loginClick = (e) => {
        e.preventDefault()
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        myHeaders.append("Cookie", "__cfduid=d971289341792afd825519421ec8d21fa1612020327; did=s%3Av0%3A61841f00-630f-11eb-8c60-3b211d1521a1.mEPCAzyWavnEJRNcRKbfAG4oqQYFN4MzLS7CM6wuidY; did_compat=s%3Av0%3A61841f00-630f-11eb-8c60-3b211d1521a1.mEPCAzyWavnEJRNcRKbfAG4oqQYFN4MzLS7CM6wuidY");

        var urlencoded = new URLSearchParams();
        urlencoded.append("grant_type", "password");
        urlencoded.append("client_id", "nliCaBuoAAurkdwnWeD9oQGQrfa81tj4");
        urlencoded.append("audience", "https://hiring.trois.in/api/v2/");
        urlencoded.append("username", "challenge@trois.in");
        urlencoded.append("password", "Challenge123");
        urlencoded.append("scope", "openid offline_access");
        urlencoded.append("client_secret", "kKuOiuszjs2fOjGGH0RBskBAYA5n1j0rgxOcUdsUPex97DBISvDzCxu4NVClVnWu");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow',
            mode:'no-cors',
            credentials:'omit'
        };

        fetch("https://trois.us.auth0.com/oauth/token", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }



    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.login}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
        </Typography>
                        
                <form className={classes.form} onSubmit={(e)=>loginClick(e)} noValidate >
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
          </Button>

                </form>
            </div>

        </Container>
    );
}
