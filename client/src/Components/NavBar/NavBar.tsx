import * as React from 'react'
import { useEffect, useContext } from 'react'

import { Wrapper } from './style/style'
import { LoginContext } from '../../App'
import Button from '@mui/material/Button'
import { signOutFirebase } from '../../Firebase'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()
  const authUserNavItems = [
    { name: 'Meeting', href: '/meeting' },
    { name: 'Review', href: '/createReview' },
  ]
  const adminUserNavItems = [
    ...authUserNavItems,
    { name: 'Admin', href: '/admin' },
  ]
  const unAuthNavItems = [{ name: 'Login', href: '/signup' }]

  const loginInfo = useContext(LoginContext)
  const [navItems, setNavItems] = React.useState(unAuthNavItems)

  useEffect(() => {
    loginInfo.id !== undefined
      ? setNavItems(loginInfo.isAdmin ? adminUserNavItems : authUserNavItems)
      : setNavItems(unAuthNavItems)
  }, [loginInfo])

  return (
    <LoginContext.Consumer>
      {loginInfo => (
        <Wrapper>
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
          {loginInfo.id && (
            <Button
              variant="contained"
              onClick={() => signOutFirebase(navigate)}
            >
              Sign out
            </Button>
          )}
        </Wrapper>
      )}
    </LoginContext.Consumer>
  )
}

export default NavBar
