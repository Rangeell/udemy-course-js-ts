import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaEdit, FaWindowClose, FaExclamation } from 'react-icons/fa';

import { Container } from '../../styles/GlobalStyles';
import { AlunoContainer, ProfilePicture, NovoAluno } from './styles';
import axios from '../../services/axios';
import Loading from '../../components/Loading/Loading';
import { toast } from 'react-toastify';

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

  const handleDeleteAsk = e => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;

    exclamation.setAttribute('display', 'block');
    e.currentTarget.remove();
  };

  const handleDelete = async (e, id, index) => {
    try {
      setIsloading(true);
      await axios.delete(`/alunos/${id}`);
      const novosAlunos = [...alunos];
      novosAlunos.splice(index, 1);

      setAlunos(novosAlunos);
      setIsloading(false);

    } catch (e) {
      const status = e.response?.status ?? 0;
      if (status === 401) {
        toast.error('Você precisa fazer login');
      } else {
        toast.error('Ocorreu um erro ao excluir aluno');
      }
      setIsloading(false);
    }
  };

  return (
    <Container>
      {/* Componente com overlay -> simula carregamento como feedback para usuário */}
      <Loading isLoading={isLoading} />

      <h1>Alunos</h1>

      <NovoAluno to='/aluno'>Novo aluno</NovoAluno >

      <AlunoContainer>

        {alunos.map((aluno, index) => (
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

            <Link onClick={handleDeleteAsk} to={`/aluno/${aluno.id}/delete`}>
              <FaWindowClose size={16} />
            </Link>

            <FaExclamation
              onClick={e => handleDelete(e, aluno.id, index)}
              size={16}
              display='none'
              cursor='pointer'
            />
          </div>
        ))}

      </AlunoContainer>
    </ Container>
  );
}
