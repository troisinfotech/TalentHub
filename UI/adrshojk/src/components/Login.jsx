import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect, useDispatch } from 'react-redux'
import { loginAction } from '../redux/actions/userActions';
import { useHistory } from 'react-router-dom';
import * as userService from '../sevices/userService'
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

const Login = (props) => {
    const dispatch = useDispatch()
    const classes = useStyles();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const loginClick = (e) => {
        e.preventDefault()
        if (email === '' || password === '') {
            alert('fill the credentials')
            return
        }     
        var raw = JSON.stringify({ "username": email, "password": password });
        userService.logUser(raw).then(res=>{
          console.log({res});
          if(res.status==='success'){
              const userInfo=JSON.parse(res.userInfo)
              dispatch(loginAction(userInfo))
              history.push('/profile')
          }else{

              alert(res.message)
          }
        }).catch(err=>{
            alert(err.message)
        })

        


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

                <form className={classes.form} onSubmit={(e) => loginClick(e)} noValidate >
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
                        onChange={(e) => setEmail(e.target.value)}
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
                        onChange={(e) => setPassword(e.target.value)}
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
const mapStateToProps = (state) => {
    return {
        data: state.userInfo
    }
}

export default connect(mapStateToProps)(Login);