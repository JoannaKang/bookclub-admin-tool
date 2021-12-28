import React, { Fragment, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import { getAuth } from 'firebase/auth'

import { Meeting } from './Pages/Meeting/Meeting'
import { Review } from './Pages/Review/Review'
import { SignUp } from './Pages/SignUp/SignUp'
import { Admin } from './Pages/Admin/Admin'
import { FourOFour } from './Pages/404/404'
import { Member } from './Interfaces/Member'

import AuthorizedApp from './Apps/Authorized/UserApp'
import UnAuthrizedApp from './Apps/Unauthorized/UnAuthorizedApp'

import GlobalStyle from './style'
import { getMemberInfoByUserId } from './ApiService/Members'
import NavBar from './Components/NavBar/NavBar'

const App: React.FC = () => {
  const theme = createTheme()
  const [loginInfo, setLoginInfo] = React.useState<Member>({
    isAdmin: false,
    name: '',
    userId: '',
    email: '',
    id: undefined,
    updateAt: '',
  })

  useEffect(() => {
    getAuth().onAuthStateChanged(user => {
      // TODO: remove console.log when deploy project
      if (user) {
        console.log('authenticated', user)
        getMemberInfoByUserId(user.uid).then(res => setLoginInfo(res))
      } else {
        console.log('signed out')
      }
    })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />
      <BrowserRouter>
        <React.Fragment>
          {console.log(loginInfo)}
          {loginInfo.id ? <AuthorizedApp /> : <UnAuthrizedApp />}
          {/* <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Meeting />} />
            <Route
              path="/createReview"
              element={<Review loginInfo={loginInfo} />}
            />
            <Route path="/admin" element={<Admin />} />
            <Route path="/404" element={<FourOFour />} />
          </Routes> */}
        </React.Fragment>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
