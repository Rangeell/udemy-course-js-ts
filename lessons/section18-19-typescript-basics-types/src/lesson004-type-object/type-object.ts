/*
Ao criar um objeto literal básico, o TypeScript realiza a inferência de tipos automaticamente

  - Contrato de Forma:
    -> O motor do TypeScript analisa o objeto e define uma "forma" (shape) fixa para ele. No exemplo, ele entende que o objeto possui obrigatoriamente as chaves `A` e `B`, ambas do tipo `string`

  - Imutabilidade da Estrutura:
    -> Uma vez que a forma foi inferida, nós não podemos adicionar novas propriedades ao objeto em tempo de execução. Tentar criar uma nova chave resultará em um erro de compilação, pois essa propriedade não existe no tipo inferido originalmente.

  - Alteração de Valores:
    -> Embora não se possa adicionar chaves, nós podemos alterar os valores das chaves existentes, desde que respeitem o tipo original.

*/

// Inferêcnia automática -> boa prática -> porém mais restrito
const objectA = {
  keyA: 'Valor A',
  keyB: 'Valor B',
};

objectA.keyA = 'Outro valor'; // Podemos mudar o valor (mesmo tipo)
objectA.keyC = 'Nova Chave'; // Não podemos atribuir uma nova chave após o Typescript inferir sobre o objeto e suas propriedades

// Tipando o objeto -> objeto mais "aberto"
const objectB: {
  readonly keyA: string; // Impede que o valor da chave seja alterado
  keyB: string;
  keyC?: string; // Torna a chave opcional (string | undefined)
  [key: string]: unknown; // Index Signature - Permite qualquer chave adicional do tipo string
} = {
  keyA: 'Valor A',
  keyB: 'Valor B',
};

objectB.keyC = 'Valor C'; // Agora podemos atribuir uma nova chave
console.log(objectB);
