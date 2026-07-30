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
    case types.LOGIN_REQUEST: {
      console.log('REDUCER', action.payload); // Payload vem de dentro da action
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
