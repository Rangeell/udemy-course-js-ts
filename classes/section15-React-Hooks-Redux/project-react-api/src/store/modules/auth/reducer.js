import * as types from '../types';

const initialState = { // Estado inicial
  isLoggedIn: false, // Usuário logado
  token: false, // Seu token
  user: {}, // Dados do usuário
  isLoading: false, // Para controle de feedback visual de carregamento
};

// O Reducer: recebe o estado atual e a ação disparada, retornando um NOVO estado
export default function (state = initialState, action) { // Temos que obrigatóriamente retornar o estado atual ou um novo estado
  switch (action.type) {
    case types.LOGIN_SUCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.isLoading = false; // Remove o componente assim que o login é bem sucedido
      newState.token = action.payload.token;
      newState.user = action.payload.user;

      return newState;
    }

    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }

    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    default: {
      return state;
    }
  }
};

/*
- Nas ações de Failure e Request, não podemos atualizar o estado, pois não sabemos se vai haver algum dado

*/
