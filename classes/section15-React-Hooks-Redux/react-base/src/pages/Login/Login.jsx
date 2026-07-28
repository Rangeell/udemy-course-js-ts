import { useDispatch } from 'react-redux';

import { Title, Paragrafo } from './styles';
import { Container } from '../../styles/GlobalStyles';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() { // Nome do componente -> Login
  const dispacth = useDispatch(); // Esse será o nosso disparador de ações (pode disparar quantas ações quisermos)

  function handleClick(event) {
    event.preventDefault();

    dispacth(exampleActions.clickButton()); // Disparando ação configurada em arquivo separado
  }

  return (
    <Container>
      <Title>Login
        <small>Oi</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
      <button type='button' onClick={handleClick}>Enviar</button>
    </ Container>
  );
}
