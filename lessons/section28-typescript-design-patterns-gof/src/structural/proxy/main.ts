/*
Nesta aula prática, aplicamos o padrão de projeto Proxy implementando uma variação de Proxy Virtual com Cache (Lazy Initialization e Lazy Loading) em TypeScript / JavaScript.

A ideia central é interceptar as chamadas a um objeto real de usuário, simulando uma busca demorada no banco de dados e armazenando o resultado em memória (cache) para que as chamadas subsequentes sejam instantâneas.

Objetivo central:
  - Implementar o padrão estrutural Proxy para interceptar as invocações direcionadas ao objeto real (`AdminUser`), promovendo otimizações de desempenho por meio de Lazy Loading e Caching sem modificar a interface pública nem exigir ajustes no código cliente.
*/

import { SystemUserProxy } from './system-user/system-user-proxy';

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('Breno', 'brenorangell');

  console.log('Isso vai levar 2 segundos.');

  // Primeira requisção leve 2 segundos (nenhum dado dem cache)
  console.log(await user.getAddresses());

  console.log('Isso vai se repetir (CACHE)'); // Entrega imedidata dos dados que estão em cache

  // Requisições seguintes
  for (let i = 0; i < 5; i++) {
    console.log(await user.getAddresses());
  }
}

clientCode();
