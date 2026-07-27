import { Title, Paragrafo } from './styles';
import { Container } from '../../styles/GlobalStyles';
import { useDispatch } from 'react-redux';

export default function Login() { // Nome do componente -> Login
  const dispacth = useDispatch(); // Esse será o nosso disparador de ações (pode disparar quantas ações quisermos)

  function handleClick(event) {
    event.preventDefault();

    dispacth({
      type: 'BOTAO_CLICADO', // Tipo da ação que estamos disparando
    });
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
