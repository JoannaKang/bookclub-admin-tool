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
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

import { createMemberInfo } from '../../ApiService/Members'
import {
  signUpWithEmail,
  signUpWithGoogleId,
  signInWithEmail,
} from '../../Firebase'

export const SignUp: React.FC = (): JSX.Element => {
  const navigate = useNavigate()
  const initialState = { name: '', email: '', password: '', isAdmin: false }
  const [loginInfo, setLoginInfo] = React.useState(initialState)
  const [isSignUp, setIsSignUp] = React.useState(true)

  const submitEmail = async (
    e: React.MouseEvent<HTMLElement>,
  ): Promise<void> => {
    e.preventDefault()

    if (!loginInfo.name) {
      alert('Please enter name')
      throw Error
    }

    const createdUserInFirebase = await signUpWithEmail(
      loginInfo.email,
      loginInfo.password,
    )
    const memberInfo = {
      userId: createdUserInFirebase?.uid,
      email: createdUserInFirebase?.email,
      name: loginInfo.name,
      isAdmin: loginInfo.isAdmin,
    }

    const createdMember = await createMemberInfo(memberInfo)
    alert(` Hello ${createdMember.name} !`)
    navigate('/createReview')
  }

  const submitEmailLogin = async (
    e: React.MouseEvent<HTMLElement>,
  ): Promise<void> => {
    e.preventDefault()
    await signInWithEmail(loginInfo.email, loginInfo.password)

    alert(` Successfully logged in!`)
    navigate('/createReview')
  }

  const submitGoogle = async (
    e: React.MouseEvent<HTMLElement>,
  ): Promise<void> => {
    e.preventDefault()
    const createdUserInFirebase = await signUpWithGoogleId()

    const memberInfo = {
      userId: createdUserInFirebase?.uid,
      email: createdUserInFirebase?.email,
      name: createdUserInFirebase?.displayName,
      isAdmin: loginInfo.isAdmin,
    }

    await createMemberInfo(memberInfo)

    alert(` Hello ${memberInfo.name} !`)
    navigate('/createReview')
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let userInput: unknown

    if (e.target.name === 'isAdmin') {
      userInput = e.target.checked as unknown
    } else {
      userInput = e.target.value as string
    }

    setLoginInfo(() => ({
      ...loginInfo,
      [e.target.name]: userInput,
    }))
  }

  return (
    // TODO: add page component ->
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
            onClick={isSignUp ? submitEmail : submitEmailLogin}
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
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                  }}
                >
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Please check only if you're admin team"
                      name="isAdmin"
                      onChange={e =>
                        handleChange(e as React.ChangeEvent<HTMLInputElement>)
                      }
                    />
                  </FormGroup>
                  <Link
                    variant="body2"
                    onClick={() => {
                      setIsSignUp(!isSignUp)
                    }}
                  >
                    Already have account?
                  </Link>
                </Box>
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
  )
}
