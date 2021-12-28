import { FunctionComponent } from 'react'
import { Routes, Route } from 'react-router-dom'

import { SignUp } from '../../Pages/SignUp/SignUp'
import { FourOFour } from '../../Pages/404/404'

const UnauthorizedApp: FunctionComponent<any> = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/404" element={<FourOFour />} />
      </Routes>
    </>
  )
}

export default UnauthorizedApp
