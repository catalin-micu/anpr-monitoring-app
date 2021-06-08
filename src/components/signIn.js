import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CREDENTIALS from '../authentificationAPI';
import { useHistory } from 'react-router-dom';
import { Collapse } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {' © '}
      <Link color="inherit" href="https://github.com/catalin-micu">
        Catalin Micu
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
    const {type} = props;
    const history = useHistory();
    const classes = useStyles();

    const [code, setCode] = useState('');
    const [pw, setPw] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    function handleSignIn () {
        if (type === 'res') {
            if (code === CREDENTIALS.residential.code && pw === CREDENTIALS.residential.pw) {
                history.push('/residential');
            }
            else {
                setErrorMsg('Invalid credentials!');
            }
        }

        if (type === 'com') {
            if (code === CREDENTIALS.commercial.code && pw === CREDENTIALS.commercial.pw) {
                history.push('/commercial');
            }
            else {
                setErrorMsg('Invalid credentials!');
            }
        }
    };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>

        <Collapse in={errorMsg != ""}>
            {errorMsg != "" ? (
            <Alert severity="error" onClose={() => { setErrorMsg(""); }}> { errorMsg }</Alert>
            ) : null}
        </Collapse>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="System Code"
            autoFocus
            onChange={event => setCode(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            //id="password"
            onChange={event => setPw(event.target.value)}
          />
          
          <Button
            //submit here: type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={handleSignIn}
          >
            Sign In
          </Button>
          
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}