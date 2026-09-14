import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title, Form } from './styles.js';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading/Loading.jsx';
import axios from '../../services/axios.js';
import * as actions from '../../store/modules/auth/actions.js';

export default function Photos() { // Nome do componente -> Photo
  const [isLoading, setIsLoading] = useState(false);
  const [foto, setFoto] = useState('');

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      try {
        const { data } = await axios.get(`/alunos/${id}`);
        const dataAluno = data.aluno;

        setFoto(dataAluno?.Photos?.[0]?.url ?? '');

      } catch {
        toast.error('Erro ao obter imagem.');
        navigate('/');
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  const handleChange = async e => {
    const foto = e.target.files[0];
    const fotoURL = URL.createObjectURL(foto);

    setFoto(fotoURL);

    const formData = new FormData();
    formData.append('aluno_id', id); // Exatamente o que precisamos mandar na requisão
    formData.append('photo', foto); // Mandamos o arquivo

    try {
      setIsLoading(true);

      await axios.post('/photos/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Foto enviada com sucesso!');
    } catch (err) {
      console.log(err);
      const { status } = err.response ?? '';
      toast.error('Erro ao enviar foto!');

      if (status === 401) dispatch(actions.loginFailure());

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <Title>Fotos</Title>

      <Form>
        <label htmlFor="foto">
          {foto ? <img src={foto} alt="foto" /> : 'Selecionar'}
          <input type="file" name="" id="foto" onChange={handleChange} />
        </label>
      </Form>
    </ Container>
  );
}
