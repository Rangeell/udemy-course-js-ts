import { createGlobalStyle, styled } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/ReactToastify.css';

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

    background-color: ${colors.primaryDarkColor};
    color: ${colors.primaryColor};
  }

  body .Toastify__toast-container .Toastify__toast--success {
    background-color: ${colors.sucessColor};
    color: ${colors.whiteDefault};
  }

  body .Toastify__toast-container .Toastify__toast--error {
    background-color: ${colors.errorColor};
    color: ${colors.whiteDefault};
  }

  button {
    padding: .6rem 1.2rem;
    border-radius: 4px;

    font-weight: 700;

    background-color: ${colors.primaryColor};
    color: ${colors.whiteDefault};

    cursor: pointer;

    transition: filter .3s ease;

    &:hover {
      filter: brightness(1.2);
    }
  }

  a {
    color: ${colors.primaryColor};
  }
`;

export const Container = styled.section`
  max-width: 480px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 5px;

  color: ${colors.primaryDarkColor};
  background: #ffff;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, .1));
`;
