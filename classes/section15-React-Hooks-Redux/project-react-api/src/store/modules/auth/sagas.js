/*
Arquivo responsável com conter as configurações do saga
*/
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';

function* loginRequest({ payload }) { // Payload são os dados que vão vir da action -> destructuring assingment
  try {

    // Não executamos o axios.post, apenas passamos a referência
    const response = yield call(axios.post, '/tokens', payload); // axios.post, url, dados

    yield put(actions.loginSucess({ ...response.data }));
    toast.success('Você fez login!');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

  } catch {
    toast.error('Usuário ou senha inválidos!'); // Estamos considerando que qualquer erro que acontecer aqui, vai ser relacionado aos dados do usuário

    yield put(actions.loginFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = payload?.auth.token ?? '';

  if (!token) return;

  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

function registerRequest({ payload }) {
  const { id, nome, email, password } = payload;
}

// Passamos a ação que vamos escutar aqui no saga
export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);

/*
- O saga utiliza funções geradoras

- call -> Utilizado para chamar funções que retornam promessas (como requisições de API), passando a referência da função e seus parâmetros separadamente.

- put -> Funciona como um "dispacth" dentro do saga servindo para disparar as ações de sucesso ou falha após a conclusão do call

- all -> Permite que o Saga escute e gerencie múltiplas ações simultaneamente.

- takeLatest -> Garante que, se o usuário clicar várias vezes em um botão, apenas a última socilitação seja processada.
*/
