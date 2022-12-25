import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';
import {SocialIcon} from 'react-social-icons';
import './login.css';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Signin() {
  const classes = useStyles();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();


  return (
    <body style={{backgroundColor:"#FEC5BB"}}>
        <Grid container className={classes.root}>
        <CssBaseline />
        
        <Grid item xs={12} md={5} component={Paper} elevation={6} square style={{margin:"auto",borderRadius:"15px"}}>
            <div className={classes.paper}>
            <a className='site_title' href="/">CU naiwong</a>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <form className={classes.form} noValidate>
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                label="Email Address"
                />
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
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
                <div style={{textAlign:"center",fontSize:"15px",margin:"20px"}}>or</div>
                <div style={{display:"flex",justifyContent:"center",gap:"10px"}}>
                    <SocialIcon url="https://twitter.com/" />
                    <SocialIcon url="https://facebook.com/" />
                    <SocialIcon url="https://google.com/" />
                </div>
                <a style={{display:"flex",justifyContent:"center",textDecoration:"none",marginTop:"50px",color:"black"}} href="/register"> Not on CU-naiwong yet? Signup </a>
                
                
            </form>
            </div>
        </Grid>
        </Grid>
    </body>
  );
}