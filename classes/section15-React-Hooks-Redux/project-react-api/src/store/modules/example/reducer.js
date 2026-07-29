import * as types from '../types';

const initialState = { // Estado inicial
  botaoClicado: false,
};

// O Reducer: recebe o estado atual e a ação disparada, retornando um NOVO estado
export default function (state = initialState, action) { // Temos que obrigatóriamente retornar o estado atual ou um novo estado
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCESS: {
      console.log('Sucesso!');

      // Regra: Nunca modifique o state atual diretamente! Ao invés disso, crie uma cópia do estado, faça as alterações e retorne a cópia.
      const newSate = { ...state };

      newSate.botaoClicado = !newSate.botaoClicado; // Se for true, vira false. Se for false, vira true (togle)
      return newSate;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      console.log('Deu erro!');
      return state; // Retornarmos o estado do jeito que estava
    }

    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Estou fazendo a requisição!');
      return state;
    }

    default: {
      return state;
    }
  }
};

/*
- Nas ações de Failure e Request, não podemos atualizar o estado, pois não sabemos se vai haver algum dado

*/
