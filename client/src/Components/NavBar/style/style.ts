import styled from 'styled-components'
import { colorTheme } from '../../../GlobalStyle'

export const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  margin: 0;
  padding: 1rem 2rem;
  background-color: ${colorTheme.paleblue};

  a {
    color: ${colorTheme.grey};
  }

  ul {
    padding: 0;
  }

  ul > li {
    list-style-type: none;
    font-size: 2rem;
    display: inline;
    margin: 1rem;
    position: relative;
  }

  ul > li:hover {
    font-size: 2.1rem;
    font-weight: 600;
  }

  ul > li:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${colorTheme.blue};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  ul > li:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  // Button {
  //   margin-right: 40px;
  // }

  /* @media screen and (max-width: 768px) {
    direction="column-reverse"
    background-color: yellow;
  } */
`
