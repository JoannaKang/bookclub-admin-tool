import { createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
  }

  a :hover { 
    text-decoration: none;
  }

  *:focus {
    outline:none;
  }

  body {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    font-family: 'Noto Sans JP', sans-serif;
  }
  body::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
    font-family: 'Noto Sans JP', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  h1 {
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;
    font-size: 2.5rem;
  }
  
  h2{
    font-family: 'Noto Sans', sans-serif;
    font-weight: 300;
    font-size: 1.5rem;
  }
  
  h3{
    font-family: 'Noto Sans', sans-serif;
    font-weight: 200;
    font-size: 1rem;
  }
`

export default GlobalStyle