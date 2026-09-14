import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Loading({ isLoading = false }) {
  if (!isLoading) return null;

  return (
    <Container>
      <div></div>
      <span>Carregando...</span>
    </Container>
  );
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
