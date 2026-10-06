/*
O Façade é um dos padrões de projeto estruturais mais simples e diretos do catálogo do Gang of Four (GoF). Sua principal função é fornecer uma interface simplificada e unificada para um subsistema complexo.

Para ilustrar a aplicação do Façade, considera-se o cenário de consumo de um módulo de criação de refeições previamente construído com o padrão Builder (disponível no ponto de entrada `src/creational/builder/index.ts`).
*/

import { BuilderFacade } from './builder-facade';

const builderFacade = new BuilderFacade();
builderFacade.makeMean1();
builderFacade.makeMean2();
builderFacade.makeMean3();
