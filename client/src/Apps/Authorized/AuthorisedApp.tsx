import { FunctionComponent } from 'react'
import { LoginContext } from '../../App'

import AdminApp from './AdminApp'
import UserApp from './UserApp'

const Authorized: FunctionComponent<any> = () => {
  return (
    <LoginContext.Consumer>
      {loginInfo => (loginInfo.isAdmin ? <AdminApp /> : <UserApp />)}
    </LoginContext.Consumer>
  )
}

export default Authorized
