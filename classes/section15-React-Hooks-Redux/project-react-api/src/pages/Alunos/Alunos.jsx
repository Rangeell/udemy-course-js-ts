import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';

import { Container } from '../../styles/GlobalStyles';
import { AlunoContainer, ProfilePicture } from './styles';
import axios from '../../services/axios';
import Loading from '../../components/Loading/Loading';

export default function Alunos() { // Nome do componente -> Alunos
  // Equivalente ao this.setState() em componentes de classe
  const [alunos, setAlunos] = useState([]); // Definimos o valor inicial do estado como um array vazio
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsloading(true);

      try {
        const response = await axios.get('/alunos');

        console.log(response.data);
        setAlunos(response.data); // Usamos a função para setar o novo valor do estado

        setIsloading(false);

      } catch (e) {
        console.error(`Erro ao tentar se conectar com a base de dados: ${e.message}`);
      } finally {
        setIsloading(false);
      }
    }

    getData();
  }, []); // Array de dependência vazio, ou seja, essa função será executada apens uma vez quando o componente for montado na tela

  return (
    <Container>
      {/* Componente com overlay -> simula carregamento como feedback para usuário */}
      <Loading isLoading={isLoading} />

      <h1>Alunos</h1>
      <AlunoContainer>

        {alunos.map(aluno => (
          <div key={String(aluno.id)}> {/* Chave identificadora para cada aluno */}

            <ProfilePicture>
              {aluno.Photos?.[0]?.url ? ( // Optional Chaining
                <img src={aluno.Photos[0].url} alt="Foto do aluno" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>

            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>

            <Link to={`/aluno/${aluno.id}/edit`}><FaEdit size={16} /></Link>
            <Link to={`/aluno/${aluno.id}/delete`}><FaWindowClose size={16} /></Link>
          </div>
        ))}

      </AlunoContainer>
    </ Container>
  );
}
