import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  gap: 1rem;

  margin-top: 2rem;

  input {
    height: 2rem;

    padding: 0 10px;
    border: 1px solid #dddddd;
    border-radius: 4px;
  }
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 1.2rem;
  padding: 0 0 20px;

  position: relative;

  img {
    width: 180px;
    aspect-ratio: 1/1;

    border-radius: 50%;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 36px;
    aspect-ratio: 1/1;

    border-radius: 50%;
    border: 0;

    background-color: ${colors.primaryColor};
    color: #ffffff;

    position: absolute;
    bottom: 0;
  }
`;

export const Title = styled.div`
  text-align: center;
`;
