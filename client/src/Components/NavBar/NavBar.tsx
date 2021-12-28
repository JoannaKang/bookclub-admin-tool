import { Wrapper } from './style/style'

const NavBar = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <a href="/">MAIN</a>
        </li>
        <li>
          <a href="/createReview">REVIEW</a>
        </li>
        <li>
          <a href="/admin">ADMIN</a>
        </li>
      </ul>
    </Wrapper>
  )
}

export default NavBar
