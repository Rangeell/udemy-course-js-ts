import styled from 'styled-components';

export const Form = styled.form `
  display: flex;
  flex-flow: column wrap;
  gap: 1rem;

  margin-top: 1.2rem;

  input {
    height: 2rem;

    padding: 0 10px;
    border: 1px solid #dddddd;
    border-radius: 4px;
  }
`;
