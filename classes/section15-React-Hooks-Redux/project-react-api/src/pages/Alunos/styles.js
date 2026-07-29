import styled from 'styled-components';

export const AlunoContainer = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
  }

  div + div {
    border-top: 1px solid #eeeeee;
  }
`;
export const ProfilePicture = styled.div`
  img {
    width: 36px;
    aspect-ratio: 1/1;
    border-radius: 50%;
  }
`;
