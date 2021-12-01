import React, {Fragment, useEffect} from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { getAuth } from "firebase/auth";

import { Main } from './Pages/Main/Main'
import { Review } from './Pages/Review/Review'
import { SignUp } from './Pages/SignUp/SignUp'
import { Admin } from './Pages/Admin/Admin'

import { Member } from './Interfaces/Member'

import * as Style from './style'
import { getMemberInfoByUserId } from 'ApiService/Members';

const App:React.FC = () => {

  const [loginInfo, setLoginInfo] = React.useState<Member[]>([])

  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      if (user) {
        console.log("authenticated", user);
        getMemberInfoByUserId(user.uid)
          .then(res => setLoginInfo(res))
      } else {
        console.log("signed out");
      }
    })
  }, [])

  return (
    <Style.Background>
      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/review" element={<Review loginInfo={loginInfo}/>}/>
          </Routes>
        </Fragment>
      </BrowserRouter>
    </Style.Background>
  );
}

export default App;