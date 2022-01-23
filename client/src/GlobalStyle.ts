import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
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
    /* font-family: 'Noto Sans JP', sans-serif; */
  }
  body::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
    /* font-family: 'Noto Sans JP', sans-serif; */
  }

  h1, h2, h3, h4, h5, h6, ul {
    margin: 0;
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

export const fontSize = {
  small: 10,
  medium: 20,
  large: 30,
  extraLarge: 40,
}
