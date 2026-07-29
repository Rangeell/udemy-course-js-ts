/*
- Todas as nossas sagas vão vir nesse arquivo
*/

import { all } from 'redux-saga/effects';

import example from './example/sagas';

export function* rootSaga() {
  // Array onde vamos colocar todos os nossos sagas
  yield all([example]);
}
