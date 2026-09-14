import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Title = styled.h1`
  text-align: center ;
`;

export const Form = styled.form`
  label {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 180px;
    aspect-ratio: 1/1;

    margin: 2rem auto;
    border: 5px dashed ${colors.primaryColor};
    border-radius: 50%;

    background-color: #eeeeee;
    cursor: pointer;
    overflow: hidden;
  }

  input {
    display: none;
  }

  img {
    width: inherit;
    aspect-ratio: 1/1;
  }
`;
