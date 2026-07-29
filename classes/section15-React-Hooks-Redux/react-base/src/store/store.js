// Arquivo de estado global o qual todos os componentes podem ter acesso

import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import persistedReducers from './modules/reduxPersist';
import rootReducer from './modules/rootReducer';
import { rootSaga } from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistedReducers(rootReducer),
  applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;

/*
1. createStore recebe o reducer ->

2. Reducer é o cara que vai escutar as ações que vão ser disparadas e, a depender da ação disparada, ele executa determinada açõa
*/
