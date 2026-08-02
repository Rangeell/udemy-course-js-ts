import { useParams } from 'react-router-dom';
import { useState } from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styles';

export default function Aluno() { // Nome do componente -> Login
  const { id } = useParams();
  const [nome, setNome] = useState();
  const [sobrenome, setSobrenome] = useState();
  const [email, setEmail] = useState();
  const [idade, setIdade] = useState();
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Container>
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
          placeholder='Nome'
          onChange={e => setSobrenome(e.target.value)}
        />

        <input
          type="email"
          value={email}
          placeholder='Nome'
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="number"
          value={idade}
          placeholder='Nome'
          onChange={e => setIdade(e.target.value)}
        />

        <input
          type="text"
          value={peso}
          placeholder='Nome'
          onChange={e => setPeso(e.target.value)}
        />

        <input
          type="text"
          value={altura}
          placeholder='Nome'
          onChange={e => setAltura(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </Form>
    </ Container>
  );
}
