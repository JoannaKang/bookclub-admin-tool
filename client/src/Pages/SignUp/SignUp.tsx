import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import 'firebase/firestore'
import 'firebase/auth'

export const SignUp = () => {

  const theme = createTheme();
  const initialState = { id: '', password: '' }
  const [loginInfo, setLoginInfo] = React.useState(initialState)
  const [isSignUp, setIsSignUp] = React.useState(true)

  const handleSubmit = () => console.log('submit')
  
  function handleChange(e) {
    console.log(e.target.name , e.target.value)
    setLoginInfo((info) =>({
      ...loginInfo, 
      [e.target.name]: e.target.value
    }))
  }

  return (
    <ThemeProvider theme={theme}>
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
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={e => handleChange(e)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e => handleChange(e)}
            />
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
              > Sign Up </Button> 
            <Grid container>
              <Grid item xs>
                {isSignUp ? 
                  <Link href="#" variant="body2" onClick={() => setIsSignUp(!isSignUp)}>
                    Already have account?
                  </Link>
                  : <Link href="#" variant="body2" onClick={() => setIsSignUp(!isSignUp)}>
                      Forgot password?
                    </Link>
                }
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>

  )

}