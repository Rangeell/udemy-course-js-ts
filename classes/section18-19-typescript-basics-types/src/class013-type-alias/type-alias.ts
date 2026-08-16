/*
- Type Alias: é como se fossem "apelidos" para os nossos tipos, que tem como finalidade deixar o nosso código mais limpo e legível.

- Usamos a palavra-chave "type" para criar uma type alias

- Por convenção, tipos que são criados pelo desenvolvedor seguem a regra de escrita PascalCase

- Essa sintaxe não existe no JS, por isso é removido durante a compilação do código
*/

//* Types
type Idade = number;

// Protoco (contrato) para objetos -> shape
type Pessoa = { // Não confunda -> isso não é o valor objeto, e sim to TIPO objeto
  nome: string,
  idade: Idade, // Usando type alias dentro de outro
  salario: number,
  corPreferida?: string, // Campo opcional
};

type CorRGB = 'Vermelhor' | 'Verde' | 'Azul'; // Type Alias + Union Types + Type Literals
type CorCMK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto'; // Type Alias + Union Types + Type Literals
type CorPreferida = CorRGB | CorCMK; // Type Alias + Union Types


//* Uso em objetos
const pessoa: Pessoa = { // Inferindo nosso tipo específico manualmente, impedindo a inferencia de tipo do TS
  //? O tipo '{}' não tem as propriedades a seguir do tipo 'Pessoa': nome, idade, salario
  nome: 'Breno',
  idade: 23,
  salario: 200_000, // Equivalente a 200.000 -> Numeric Separator -> Melhor legibilidade
};

//* Uso em funções
function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa { // Usando nossos types alias
  return {
    ...pessoa,
    corPreferida: cor,
  };
}

console.log(setCorPreferida(pessoa, 'Azul'));
console.log(pessoa); // Não mutamos o objeto original!
/*
Output:
  { nome: 'Breno', idade: 23, salario: 200000, corPreferida: 'Azul' }
  { nome: 'Breno', idade: 23, salario: 200000 }
*/
