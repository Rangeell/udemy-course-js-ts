import { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useNavigate } from 'react-router-dom';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styles';
import axios from '../../services/axios';

export default function Register() { // Nome do componente -> Register
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    let formErros = false;

    // Validações
    if (nome.length < 3 || nome.length > 255) {
      formErros = true;
      toast.error('Nome deve ter entre 3 e 255 caracteres!');
    }

    if (!isEmail(email)) {
      formErros = true;
      toast.error('E-mail inválido!');
    }

    if (password.length < 3 || password.length > 255) {
      formErros = true;
      toast.error('Senha deve ter entre 3 e 255 caracteres!');
    }

    if (formErros) return;

    try {
      await axios.post('/users/', {
        nome,
        password,
        email,
      });

      toast.success('Você fez seu cadastros!');
      navigate('/login');

    } catch (e) {
      // Se não existir e.response ou e.response.data, retorna [], se existir, retorna e.response.data.errors -> criamos no backend
      const errors = e.response?.data?.errors ?? []; // Optional Chaining

      errors.forEach(error => {
        toast.error(error);
      });
    }
  }

  return (
    <Container>
      <h1>Crie sua conta!</h1>

      <Form onSubmit={handleSubmit}>

        <p>
          <label htmlFor="iNome">Nome:</label>
          <input
            type="text"
            name="nome"
            id="iNome"
            value={nome}
            placeholder='Seu nome.'

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
            placeholder='Seu e-mail.'
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
            placeholder='Sua senha.'
            autoComplete='off'

            // Executamos a função "onChange" diretamente no input por ser muito simples
            // Ao digitar no input, o valor da variável "nome" vai ser setado e o "value" do input vai ser atualizado
            onChange={e => setPassword(e.target.value)} />
        </p>

        <button type='submit'>Criar minha conta</button>

      </Form>
    </ Container>
  );
}
