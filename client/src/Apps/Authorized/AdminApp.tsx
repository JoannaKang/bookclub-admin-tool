import { FunctionComponent } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Meeting } from '../../Pages/Meeting/Meeting'
import { Review } from '../../Pages/Review/Review'
import { SignUp } from '../../Pages/SignUp/SignUp'
import { Admin } from '../../Pages/Admin/Admin'
import { FourOFour } from '../../Pages/404/404'

const AdminApp: FunctionComponent<any> = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/meeting" element={<Meeting />} />
      <Route path="/createReview" element={<Review />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/404" element={<FourOFour />} />
    </Routes>
  )
}

export default AdminApp
