import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }

  #root {
    width: 100vw;
    height: 100vh;
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

  h1, h2, h3, h4, h5, h6, ul {
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
export const colorTheme = {
  blue: '#396EB0',
  green: '#74d693',
  pink: '#FFB6B9',
  paleblue: '#A6D0E4',
  palegreen: '#F9FFEA',
  palepink: '#FAE3D9',
  white: '#EFEFEF',
  grey: '#444444',
  black: '#261C2C',
}
