import styled from 'styled-components';
import { primaryColor, whiteDefault } from '../../config/colors';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  height: 2.5rem;
  padding: 0 1rem;

  background: ${primaryColor};

  a {
    font-weight: bold;
    color: ${whiteDefault};
  }
`;
