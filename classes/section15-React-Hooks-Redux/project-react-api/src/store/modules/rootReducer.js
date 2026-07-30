/*
Arquivo responsável por combinar vários reducers
Vamos importar todos os reducers para cá e combinar todos eles
*/

import { combineReducers } from 'redux';

import auth from './auth/reducer';

export default combineReducers({
  auth,
});
