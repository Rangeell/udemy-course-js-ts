const initialState = {
  botaoClicado: false,
};

// O Reducer: recebe o estado atual e a ação disparada, retornando um NOVO estado
export default function (state = initialState, action) { // Temos que obrigatóriamente retornar o estado atual ou um novo estado
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
