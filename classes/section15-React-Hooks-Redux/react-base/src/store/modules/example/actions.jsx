/*
Esse arquivo é responsável por disparar as actions do redux
Ao invés disparar um objeto literal no dispatch, vamos importar esse action e disparar uma action que está aqui
Para isso, podemos escrever funções que são actions
*/

import * as types from '../types'; // Importando todos os types para as nossas actions do redux

export function clickButton() {
  return {
    type: types.BOTAO_CLICADO, // Tipo da action que estamos disparando para o redux ouvir
  };
}
