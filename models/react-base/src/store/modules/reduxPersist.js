/*
Arquivo responsável por persistir os dados da aplicação
*/

import storage from 'redux-persist/es/storage';
import { persistReducer } from 'redux-persist';
console.log(storage);
console.log(localStorage);

export default reducers => {
  const persistedReducers = persistReducer(
    {
      key: 'REACT-BASE', // Geralmente é nome do projeto
      storage,
      whitelist: ['exampleReducer'], // Recebe os módulos do rootReducer que serão salvos
    }, reducers);

    return persistedReducers;
};
