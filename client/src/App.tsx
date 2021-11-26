import React, {Fragment} from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Review } from './Pages/Review/Review'
import { Login } from './Pages/Login/Login'

const App:React.FC = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Review />}/>
          <Route path='/login' element={<Login />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;