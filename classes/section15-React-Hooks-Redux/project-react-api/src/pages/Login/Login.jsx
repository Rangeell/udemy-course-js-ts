import { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styles';
import * as actions from '../../store/modules/auth/actions';

export default function Login() { // Nome do componente -> Login
  const dispatch = useDispatch(); // Nosso disparador de ações

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido!');
    }

    if (password.length < 3 || password.length > 255) {
      formErrors = true;
      toast.error('Senha inválida!');
    }

    if (formErrors) return;

    dispatch(actions.loginRequest({ email, password })); // email e password são o payload
  };

  return (
    <Container>
      <h1>Login</h1>

      <Form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="iEmail">E-mail:</label>
          <input
            type="email"
            name="email"
            id="iEmail"
            value={email}
            onChange={e => setEmail(e.target.value)} // Seta o valor da variável email
            placeholder='Seu E-mail'
            autoComplete='email'
          />
        </p>

        <p>
          <label htmlFor="iPassword">Senha:</label>
          <input
            type="password"
            name="password"
            id="iPassword"
            value={password}
            onChange={e => setPassword(e.target.value)} // Seta o valor da variável password
            placeholder='Sua senha'
            autoComplete='off'
          />
        </p>

        <button type="submit">Entrar</button>
      </Form>
    </ Container>
  );

}
