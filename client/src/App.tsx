import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import { getAuth } from 'firebase/auth'
import { Member } from './Interfaces/Member'

import AuthorizedApp from './Apps/Authorized/AuthorisedApp'
import UnAuthrizedApp from './Apps/Unauthorized/UnAuthorizedApp'

import { GlobalStyle } from './GlobalStyle'
import { getMemberInfoByUserId } from './ApiService/Members'
import NavBar from './Components/NavBar/NavBar'

function defaultLoginInfo() {
  return {
    isAdmin: false,
    name: '',
    userId: '',
    email: '',
    id: undefined,
    updateAt: '',
  }
}

export const LoginContext = React.createContext<Member>(defaultLoginInfo())

const App: React.FC = () => {
  const theme = createTheme()
  const [loginInfo, setLoginInfo] = React.useState<Member>(defaultLoginInfo())

  const queryLoginInfo = async user => {
    const memberInfo = await getMemberInfoByUserId(user.uid)
    if (memberInfo === undefined) {
      setTimeout(queryLoginInfo, 10, user)
    } else {
      setLoginInfo(memberInfo)
    }
  }

  useEffect(() => {
    getAuth().onAuthStateChanged(async user => {
      // TODO: remove console.log when deploy project
      if (user) {
        queryLoginInfo(user)
      } else {
        console.log('signed out')
        setLoginInfo(defaultLoginInfo())
      }
    })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LoginContext.Provider value={loginInfo}>
        <BrowserRouter>
          <NavBar />
          <React.Fragment>
            {loginInfo.id !== undefined ? (
              <AuthorizedApp />
            ) : (
              <UnAuthrizedApp />
            )}
          </React.Fragment>
        </BrowserRouter>
      </LoginContext.Provider>
    </ThemeProvider>
  )
}

export default App
