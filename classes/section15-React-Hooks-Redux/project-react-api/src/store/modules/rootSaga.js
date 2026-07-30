/*
- Todas as nossas sagas vão vir nesse arquivo
*/

import { all } from 'redux-saga/effects';

import auth from './auth/sagas';

export function* rootSaga() {
  // Array onde vamos colocar todos os nossos sagas
  yield all([auth]);
}
