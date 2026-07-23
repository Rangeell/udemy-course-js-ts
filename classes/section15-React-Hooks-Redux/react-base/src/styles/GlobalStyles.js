import { createGlobalStyle, styled } from 'styled-components';
import { primaryColor, primaryDarkColor, whiteDefault } from '../config/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration: none;
    appearance: none;
    list-style: none;
    list-style-position: inside;
  }

  html {
    font-size: 16px;
  }

  body {
    width: 100%;
    height: 100dvh;

    font-family: sans-serif;

    background-color: ${primaryDarkColor};
    color: ${primaryColor};
  }

  button {
    padding: .6rem 1.2rem;
    border-radius: 4px;

    font-weight: 700;

    background-color: ${primaryColor};
    color: ${whiteDefault};

    cursor: pointer;
  }

  a {
    color: ${primaryColor};
  }
`;

export const Container = styled.section`
  max-width: 360px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 5px;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, .1));

  background: #ffff;
`;
