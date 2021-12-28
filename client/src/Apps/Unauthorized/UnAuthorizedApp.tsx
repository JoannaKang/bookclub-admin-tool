import React, { FunctionComponent } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { SignUp } from '../../Pages/SignUp/SignUp'
import { FourOFour } from '../../Pages/404/404'

const UnauthorizedApp: FunctionComponent<any> = () => {
  console.log('heres')
  return (
    <>
      <h1>Not logged in</h1>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/404" element={<FourOFour />} />
      </Routes>
    </>
  )
}

export default UnauthorizedApp
