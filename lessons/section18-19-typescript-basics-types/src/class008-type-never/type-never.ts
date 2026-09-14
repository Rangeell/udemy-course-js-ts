/*
O tipo never indica que algo nunca vai acontencer ou que uma função nunca vai chegar ao seu fim normal (nunca retornará um valor, nem mesmo undefined)

Há duas possibilidades óbvias para o uso do nerver:
  1.Laço infinito: Se uma função entra em um loop que nunca termina, ela tecnicamente nunca retornará um valor para quem a chamou.

  2. A mais comum -> Lançamento de Erros: Quando uma função cria e lança um erro ela interrompe a aplicação naquele ponto se o erro não for tratado, nunca chegando a executar um comando de retorno, ou seja, nunca completa o seu ciclo de retorno

Diferenças entre void e never:
  - void: A função executa suas instruções até o final e encerra sem retornar um valor utilizável e, normalmente, retorna undefined

  - never: A função é interrompida antes de ser concluída ou entra em um fluxo que jamais é finalizado.
*/

// Lançamento de erro
function createError(msg: string): never {
  throw new Error(msg);
}

// Laço infinito
function loopInfinito(): never {
  while (true) {
    console.log('Executando infinitamente...');
  }
}

console.log(createError('Erro'));
