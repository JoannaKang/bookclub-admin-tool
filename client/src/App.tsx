import React, {Fragment} from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Main } from './Pages/Main/Main'
import { Review } from './Pages/Review/Review'
import { SignUp } from './Pages/SignUp/SignUp'
import { Admin } from './Pages/Admin/Admin'

const App:React.FC = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path="/review" element={<Review />}/>
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;