// Arquivo de estado global o qual todos os componentes podem ter acesso

import { createStore } from 'redux';

// O Reducer: recebe o estado atual e a ação disparada, retornando um NOVO estado
const initialState = {
  botaoClicado: false,
};

const reducer = (state = initialState, action) => { // Temos que obrigatóriamente retornar o estado atual ou um novo estado
  switch (action.type) {
    case 'BOTAO_CLICADO': {

      // Regra: Nunca modifique o state atual diretamente! Ao invés disso, crie uma cópia do estado, faça as alterações e retorne a cópia.
      const newSate = { ...state };

      newSate.botaoClicado = !newSate.botaoClicado; // Se for true, vira false. Se for false, vira true (togle)
      return newSate;
    }

    default: {
      return state;
    }
  }
};

const store = createStore(reducer);
export default store;

/*
1. createStore recebe o reducer ->
2. Reducer é o cara que vai escutar as ações que vão ser disparadas e, a depender da ação disparada, ele executa determinada açõa
*/
