/*
A ideia dessa aula é criar uma funcionalidade para mapear ou traduzir cores (por exemplo, chaves em português e valores em inglês).

Operadores:
  - `typeof` (no campo do tipo) !== do `typeof` do JavaScript:
    Verifica o tipo de um dado em tempo de execução

  - `keyof`:
    Lê um tipo estruturado (como uma interface ou tipo do objeto) e retorna uma união das chaves desse tipo em formato de string literal.
*/

//* PRIMEIRA SOLUÇÃO -> TYPE ALIAS E LITERAL TYPES
type CoresObj = {
  vermelho: string,
  verde: string,
  azul: string,
}

const coresObj: CoresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
};

// Função para selecionar a cor
function traduzirCor(cor: 'vermelho' | 'verde' | 'azul', cores: CoresObj) {
  return cores[cor]; // Retorna a tradução dinamicamente
  // ! Problema: Acoplamento rídigo, código redundante e alta chande de bugs.
}

console.log(traduzirCor('vermelho', coresObj));
console.log(traduzirCor('verde', coresObj));
console.log(traduzirCor('azul', coresObj));

//* SEGUNDA SOLUÇÃO -> typeof e keyof
type CoresObj2 = typeof coresObj2;
type CoresChaves = keyof CoresObj2;

const coresObj2 = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
};

function traduzirCor2(cor: CoresChaves, cores: CoresObj2): string {
  return cores[cor];
}

console.log(traduzirCor2('vermelho', coresObj2));
console.log(traduzirCor2('verde', coresObj2));
console.log(traduzirCor2('azul', coresObj2));
console.log(traduzirCor2('roxo', coresObj2));
