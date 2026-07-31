/*
Arquivo responsável com conter as configurações do saga
*/
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as actions from './actions';
import * as types from '../types';

function* loginRequest({ payload }) { // Payload são os dados que vão vir da action -> destructuring assingment
  yield console.log('SAGA', payload);
}

// Passamos a ação que vamos escutar aqui no saga
export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
]);

/*
- O saga utiliza funções geradoras

- call -> Utilizado para chamar funções que retornam promessas (como requisições de API), passando a referência da função e seus parâmetros separadamente.

- put -> Funciona como um "dispacth" dentro do saga servindo para disparar as ações de sucesso ou falha após a conclusão do call

- all -> Permite que o Saga escute e gerencie múltiplas ações simultaneamente.

- takeLatest -> Garante que, se o usuário clicar várias vezes em um botão, apenas a última socilitação seja processada.
*/
