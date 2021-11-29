import React, {Fragment, useEffect} from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Main } from './Pages/Main/Main'
import { Review } from './Pages/Review/Review'
import { SignUp } from './Pages/SignUp/SignUp'
import { Admin } from './Pages/Admin/Admin'

import { getMemberInfoByUserId } from './ApiService/Members'

const App:React.FC = () => {

  const [loginInfo, setLoginInfo] = React.useState([])

  useEffect(() => {
    getMemberInfoByUserId('jfrences')
      .then(res => setLoginInfo(res))
  }, [])

  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path="/review" element={<Review loginInfo={loginInfo}/>}/>
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;