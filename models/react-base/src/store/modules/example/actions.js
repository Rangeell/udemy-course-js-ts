/*
- Esse arquivo é responsável por disparar as actions do redux

- Ao invés disparar um objeto literal no dispatch, vamos importar esse action e disparar uma action que está aqui

- Para isso, podemos escrever funções que são actions
*/

import * as types from '../types'; // Importando todos os types para as nossas actions do redux

export function clickButtonRequest() {
  return {
    type: types.BOTAO_CLICADO_REQUEST, // Tipo da action que estamos disparando para o redux ouvir
  };
}

export function clickButtonSucess() {
  return {
    type: types.BOTAO_CLICADO_SUCESS, // Tipo da action que estamos disparando para o redux ouvir
  };
}

export function clickButtonFailure() {
  return {
    type: types.BOTAO_CLICADO_FAILURE, // Tipo da action que estamos disparando para o redux ouvir
  };
}
