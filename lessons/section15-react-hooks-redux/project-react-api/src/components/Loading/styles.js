import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: auto;

  font-size: 2rem;

  div {
    position: absolute;
    inset: 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.8);
  }

  span {
    z-index: 2;
    user-select: none;
    color: white;
  }
`;
