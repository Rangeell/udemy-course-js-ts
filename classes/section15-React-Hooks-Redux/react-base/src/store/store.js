// Arquivo de estado global o qual todos os componentes podem ter acesso

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import { rootSaga } from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;

/*
1. createStore recebe o reducer ->

2. Reducer é o cara que vai escutar as ações que vão ser disparadas e, a depender da ação disparada, ele executa determinada açõa
*/
