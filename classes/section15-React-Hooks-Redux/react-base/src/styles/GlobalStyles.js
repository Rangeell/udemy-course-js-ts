import styed, { createGlobalStyle, styled } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
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
    background-color: grey;
  }

  button {
    cursor: pointer;
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
