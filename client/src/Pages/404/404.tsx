import { createTheme, ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

export const FourOFour = () => {
  const theme = createTheme()
  const navigate = useNavigate()
  const navigateToLogin = () => navigate('/signUp')
  const goToLogin = () => navigateToLogin()
  return (
    <ThemeProvider theme={theme}>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <h1>Please login first</h1>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={goToLogin}
        >
          {' '}
          Go to Login page
        </Button>
      </Box>
    </ThemeProvider>
  )
}
