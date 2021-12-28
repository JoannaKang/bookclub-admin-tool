import React, { FunctionComponent } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Meeting } from '../../Pages/Meeting/Meeting'
import { Review } from '../../Pages/Review/Review'
import { SignUp } from '../../Pages/SignUp/SignUp'
import { Admin } from '../../Pages/Admin/Admin'
import { FourOFour } from '../../Pages/404/404'
import { Member } from '../../Interfaces/Member'

const UserApp: FunctionComponent<any> = () => {
  console.log('userapp')
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Meeting />} />
        <Route path="/createReview" element={<Review />} />
      </Routes>
    </>
  )
}

export default UserApp
