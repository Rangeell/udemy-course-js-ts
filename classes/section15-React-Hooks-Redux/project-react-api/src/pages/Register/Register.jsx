import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styles';
import Loading from '../../components/Loading/Loading';
import * as actions from '../../store/modules/auth/actions';

export default function Register() { // Nome do componente -> Register
  const id = useSelector(state => state.auth.user.id);
  const nomeStored = useSelector(state => state.auth.user.nome);
  const emailStorage = useSelector(state => state.auth.user.email);
  const isLoading = useSelector(state => state.auth.isLoading);

  const navigate = useNavigate();
  const dispath = useDispatch();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!id) return; // Usuário não está logado

    setNome(nomeStored);
    setEmail(emailStorage);
  },
    [emailStorage, id, nomeStored]);

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    // Validações
    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Nome deve ter entre 3 e 255 caracteres!');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido!');
    }

    if (!id && (password.length < 6 || password.length > 255)) {
      formErrors = true;
      toast.error('Senha deve ter entre 3 e 255 caracteres!');
    }

    if (formErrors) return;

    dispath(actions.registerRequest({ nome, email, password, id })); // Envia para o saga
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? 'Editar dados' : 'Crie sua conta'}</h1>

      <Form onSubmit={handleSubmit}>

        <p>
          <label htmlFor="iNome">Nome:</label>
          <input
            type="text"
            name="nome"
            id="iNome"
            value={nome}
            placeholder='Seu nome'

            // Executamos a função "onChange" diretamente no input por ser muito simples
            // Ao digitar no input, o valor da variável "nome" vai ser setado e o "value" do input vai ser atualizado
            onChange={e => setNome(e.target.value)} />
        </p>

        <p>
          <label htmlFor="iEmail">E-mail:</label>
          <input
            type="email"
            name="email"
            id="iEmail"
            value={email}
            placeholder='Seu e-mail'
            autoComplete='email'

            // Executamos a função "onChange" diretamente no input por ser muito simples
            // Ao digitar no input, o valor da variável "nome" vai ser setado e o "value" do input vai ser atualizado
            onChange={e => setEmail(e.target.value)} />
        </p>

        <p>
          <label htmlFor="iSenha">Senha:</label>
          <input
            type="password"
            name="password"
            id="iSenha"
            value={password}
            placeholder='Sua senha'
            autoComplete='off'

            // Executamos a função "onChange" diretamente no input por ser muito simples
            // Ao digitar no input, o valor da variável "nome" vai ser setado e o "value" do input vai ser atualizado
            onChange={e => setPassword(e.target.value)} />
        </p>

        <button type='submit'>{id ? 'Salvar alterações' : 'Criar conta'}</button>

      </Form>
    </ Container>
  );
}
