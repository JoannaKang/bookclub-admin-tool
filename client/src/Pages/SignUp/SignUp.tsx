import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { createMemberInfo } from '../../ApiService/Members'
import {
  signUpWithEmail,
  signUpWithGoogleId,
  signInWithEmail,
} from '../../Firebase'

export const SignUp: React.FC = (): JSX.Element => {
  const theme = createTheme()
  const navigate = useNavigate()
  const initialState = { name: '', email: '', password: '' }
  const [loginInfo, setLoginInfo] = React.useState(initialState)
  const [isSignUp, setIsSignUp] = React.useState(true)

  const submitEmail = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault()

    if (!loginInfo.name) {
      alert('Please enter name')
      throw Error
    }

    signUpWithEmail(loginInfo.email, loginInfo.password).then(res => {
      const memberInfo = {
        userId: res?.uid,
        email: res?.email,
        name: loginInfo.name,
        isAdmin: false,
      }
      createMemberInfo(memberInfo)
      alert(` Hello ${memberInfo.name} !`)
      navigate('/createReview')
    })
  }

  const submitGoogle = async (
    e: React.MouseEvent<HTMLElement>,
  ): Promise<void> => {
    e.preventDefault()
    signUpWithGoogleId().then(res => {
      const memberInfo = {
        userId: res?.uid,
        email: res?.email,
        name: res?.displayName,
        isAdmin: false,
      }
      createMemberInfo(memberInfo)
      alert(` Hello ${memberInfo.name} !`)
      navigate('/createReview')
    })
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLoginInfo(() => ({
      ...loginInfo,
      [e.target.name]: e.target.value as string,
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
          <Box component="form" noValidate sx={{ mt: 1 }}>
            {isSignUp && (
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                onChange={e =>
                  handleChange(e as React.ChangeEvent<HTMLInputElement>)
                }
              />
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={e =>
                handleChange(e as React.ChangeEvent<HTMLInputElement>)
              }
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
              onChange={e =>
                handleChange(e as React.ChangeEvent<HTMLInputElement>)
              }
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={
                isSignUp
                  ? submitEmail
                  : () => signInWithEmail(loginInfo.email, loginInfo.password)
              }
            >
              {isSignUp ? 'Sign Up with Email' : 'Login with Email'}
            </Button>
            <hr />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={submitGoogle}
            >
              Sign Up with Google id
            </Button>
            <Grid container>
              <Grid item xs>
                {isSignUp ? (
                  <Link
                    variant="body2"
                    onClick={() => {
                      setIsSignUp(!isSignUp)
                    }}
                  >
                    Already have account?
                  </Link>
                ) : (
                  <Link
                    variant="body2"
                    onClick={() => {
                      setIsSignUp(!isSignUp)
                    }}
                  >
                    Forgot password?
                  </Link>
                )}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
