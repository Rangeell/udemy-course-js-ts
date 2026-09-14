/*
- Esse arquivo é responsável por disparar as actions do redux

- Ao invés disparar um objeto literal no dispatch, vamos importar esse action e disparar uma action que está aqui

- Para isso, podemos escrever funções que são actions
*/

import * as types from '../types'; // Importando todos os types para as nossas actions do redux

// Payload são os dados em si (e-mail e senha) que vamos passar para o redux e o saga para alterar o estado
export function loginRequest(payload) { // Vamos receber o payload como um objeto
  return {
    type: types.LOGIN_REQUEST, // Tipo da action que estamos disparando para o redux ouvir
    payload,
  };
}

export function loginSuccess(payload) {
  return {
    type: types.LOGIN_SUCCESS, // Tipo da action que estamos disparando para o redux ouvir
    payload,
  };
}

export function loginFailure(payload) {
  return {
    type: types.LOGIN_FAILURE, // Tipo da action que estamos disparando para o redux ouvir
    payload,
  };
}

export function registerRequest(payload) {
  return {
    type: types.REGISTER_REQUEST, // Tipo da action que estamos disparando para o redux ouvir
    payload,
  };
}

export function registerFailure(payload) {
  return {
    type: types.REGISTER_FAILURE, // Tipo da action que estamos disparando para o redux ouvir
    payload,
  };
}

export function registerUpdatedSuccess(payload) {
  return {
    type: types.REGISTER_UPDATED_SUCCESS, // Tipo da action que estamos disparando para o redux ouvir
    payload,
  };
}

export function registerCreatedSuccess(payload) {
  return {
    type: types.REGISTER_CREATED_SUCCESS, // Tipo da action que estamos disparando para o redux ouvir
    payload,
  };
}
