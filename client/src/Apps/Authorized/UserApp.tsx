import React, { FunctionComponent } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginContext } from '../../App'

import { Meeting } from '../../Pages/Meeting/Meeting'
import { Review } from '../../Pages/Review/Review'
import { SignUp } from '../../Pages/SignUp/SignUp'
import { Admin } from '../../Pages/Admin/Admin'
import { FourOFour } from '../../Pages/404/404'
import { Member } from '../../Interfaces/Member'

const UserApp: FunctionComponent<any> = () => {
  console.log('userapp')
  return (
    <LoginContext.Consumer>
      {loginInfo => (
        <>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/meeting" element={<Meeting />} />
            <Route path="/createReview" element={<Review />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/" element={<FourOFour />} />
          </Routes>
        </>
      )}
    </LoginContext.Consumer>
  )
}

export default UserApp
