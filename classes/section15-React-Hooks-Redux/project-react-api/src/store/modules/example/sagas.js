/*
Arquivo responsável com conter as configurações do saga
*/
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as actions from './actions';
import * as types from '../types';

const requisição = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 600);
});

function* exampleRequest() {
  try {
    yield call(requisição); // Chamando nossa requisção (passamos a referência)
    yield put(actions.clickButtonSucess()); // Disparando nossa ação de sucess -> se a promise for resolvida

  } catch {
    toast.error('Deu Erro');
    yield put(actions.clickButtonFailure()); // Dispara a e executa a ação de erro
  }
}

// Passamos a ação que vamos escutar aqui no saga
export default all([
  takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest),
]);

/*
- O saga utiliza funções geradoras

- call -> Utilizado para chamar funções que retornam promessas (como requisições de API), passando a referência da função e seus parâmetros separadamente.

- put -> Funciona como um "dispacth" dentro do saga servindo para disparar as ações de sucesso ou falha após a conclusão do call

- all -> Permite que o Saga escute e gerencie múltiplas ações simultaneamente.

- takeLatest -> Garante que, se o usuário clicar várias vezes em um botão, apenas a última socilitação seja processada.
*/
