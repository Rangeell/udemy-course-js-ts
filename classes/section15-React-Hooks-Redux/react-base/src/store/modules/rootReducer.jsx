/*
Arquivo responsável por combinar vários reducers
Vamos importar todos os reducers para cá e combinar todos eles
*/

import { combineReducers } from 'redux';

import exampleReducer from './example/reducer';

export default combineReducers({
  exampleReducer,
});
