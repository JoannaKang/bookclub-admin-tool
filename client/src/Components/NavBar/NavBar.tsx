import { Wrapper } from './style/style'
import { LoginContext } from '../../App'
import Button from '@mui/material/Button'
import { signOutFirebase } from '../../Firebase'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()
  return (
    <LoginContext.Consumer>
      {loginInfo => {
        if (loginInfo.id !== undefined && loginInfo.isAdmin) {
          return (
            <Wrapper>
              <ul>
                <li>
                  <Link to="/meeting">Meeting</Link>
                </li>
                <li>
                  <Link to="/createReview">Review</Link>
                </li>
                <li>
                  <Link to="/admin">Admin</Link>
                </li>
              </ul>
              <Button
                variant="contained"
                onClick={() => signOutFirebase(navigate)}
              >
                Sign out
              </Button>
            </Wrapper>
          )
        } else if (loginInfo.id !== undefined) {
          return (
            <Wrapper>
              {console.log('unAuth', loginInfo)}
              <ul>
                <li>
                  <Link to="/meeting">Meeting</Link>
                </li>
                <li>
                  <Link to="/createReview">Review</Link>
                </li>
              </ul>
              <Button
                variant="contained"
                onClick={() => signOutFirebase(navigate)}
              >
                Sign out
              </Button>
            </Wrapper>
          )
        } else {
          return (
            <Wrapper>
              {console.log('navbar', loginInfo)}
              <ul>
                <li>
                  <Link to="/signup">Login</Link>
                </li>
              </ul>
            </Wrapper>
          )
        }
      }}
    </LoginContext.Consumer>
  )
}

export default NavBar
