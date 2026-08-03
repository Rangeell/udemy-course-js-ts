import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { isEmail, isInt, isFloat } from 'validator';
import { toast } from 'react-toastify';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styles';
import Loading from '../../components/Loading/Loading';
import axios from '../../services/axios';
import { GiConsoleController } from 'react-icons/gi';

export default function Aluno() { // Nome do componente -> Login
  const { id } = useParams();
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => { // Preenche os dados do formulário de acordo com o id do usuário
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        const aluno = data.aluno;
        const photo = data?.Photos?.[0]?.url ?? '';

        setNome(aluno.nome);
        setSobrenome(aluno.sobrenome);
        setEmail(aluno.email);
        setIdade(aluno.idade);
        setPeso(aluno.peso);
        setAltura(aluno.altura);

        setIsLoading(false);

      } catch (err) {
        setIsLoading(false);

        const status = err.response?.status ?? 0;
        const errors = err.response?.data?.errors;

        if (status === 400) errors.forEach(error => toast.error(error));
        navigate('/');
      }
    }

    getData();
  }, [id]);

  const handleSubmit = e => {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      toast.error('Nome precisa ter entre 3 e 255 caracteres');
      formErrors = true;
    }

    if (sobrenome.length < 3 || sobrenome.length > 255) {
      toast.error('Sobrenome precisa ter entre 3 e 255 caracteres');
      formErrors = true;
    }

    if (!isEmail(email)) {
      toast.error('E-mail inválido!');
      formErrors = true;
    }

    if (!isInt(String(idade))) {
      toast.error('Idade inválida!');
      formErrors = true;
    }

    if (!isFloat(String(peso))) {
      toast.error('Peso inválido!');
      formErrors = true;
    }

    if (!isFloat(String(altura))) {
      toast.error('Altura inválida!');
      formErrors = true;
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? 'Editar aluno' : 'Novo aluno'}</h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome}
          placeholder='Nome'
          onChange={e => setNome(e.target.value)}
        />

        <input
          type="text"
          value={sobrenome}
          placeholder='Sobrenome'
          onChange={e => setSobrenome(e.target.value)}
        />

        <input
          type="email"
          value={email}
          placeholder='E-mail'
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="number"
          value={idade}
          placeholder='Idade'
          onChange={e => setIdade(e.target.value)}
        />

        <input
          type="text"
          value={peso}
          placeholder='Peso'
          onChange={e => setPeso(e.target.value)}
        />

        <input
          type="text"
          value={altura}
          placeholder='Altura'
          onChange={e => setAltura(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </Form>
    </ Container>
  );
}
