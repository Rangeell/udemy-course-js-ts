// Arquivo de estado global o qual todos os componentes podem ter acesso

import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer);
export default store;

/*
1. createStore recebe o reducer ->
2. Reducer é o cara que vai escutar as ações que vão ser disparadas e, a depender da ação disparada, ele executa determinada açõa
*/
