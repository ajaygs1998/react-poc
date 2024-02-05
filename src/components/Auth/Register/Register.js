// // src/components/Auth/Register/Register.js
// import React from 'react';
// import { Container, Typography, TextField, Button, Link } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     marginTop: theme.spacing(8),
//   },
//   form: {
//     width: '100%',
//     maxWidth: '400px',
//     marginTop: theme.spacing(1),
//   },
//   submitButton: {
//     marginTop: theme.spacing(2),
//   },
// }));

// const Register = () => {
//   const classes = useStyles();

//   return (
   


// <Container component="main" maxWidth="xs" className={classes.container}>
// <Typography variant="h4" align="center">
//   Register
// </Typography>
// <form className={classes.form} noValidate>
//   <TextField
//     variant="outlined"
//     margin="normal"
//     required
//     fullWidth
//     id="name"
//     label="Full Name"
//     name="name"
//     autoComplete="name"
//     autoFocus
//   />
//   <TextField
//     variant="outlined"
//     margin="normal"
//     required
//     fullWidth
//     id="email"
//     label="Email Address"
//     name="email"
//     autoComplete="email"
//   />
//   <TextField
//     variant="outlined"
//     margin="normal"
//     required
//     fullWidth
//     name="password"
//     label="Password"
//     type="password"
//     id="password"
//     autoComplete="new-password"
//   />
//   <Button
//     type="submit"
//     fullWidth
//     variant="contained"
//     color="primary"
//     className={classes.submitButton}
//   >
//     Sign Up
//   </Button>
//   <Typography variant="body2" align="center" style={{ marginTop: '10px' }}>
//     Already have an account? <Link to="/login">Sign In</Link>
//   </Typography>
// </form>
// </Container>
//   );
// };

// export default Register;
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}