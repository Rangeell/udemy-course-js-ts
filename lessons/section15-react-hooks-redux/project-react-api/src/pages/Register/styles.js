import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  gap: 1rem;

  margin-top: 1rem;

  label {
    display: flex;
    flex-flow: column wrap;
  }

  input {
    width: 100%;
    height: 2rem;

    margin-top: 5px;
    padding: 0 .7rem;
    border: 1px solid #dddddd;
    border-radius: 4px;

    font-size: 1rem;

    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }
`;
