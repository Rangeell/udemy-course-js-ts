/*
O tipo unknown é semelhante ao tipo any, porém ele é consideravelmente mais seguro.
Na cadeia hierarquica de tipos do Typescript, o unknown vem antes de todos os tipos ("pai de todos").
*/

let x: unknown; // Não sabemos com antecedência de qual tipo é essa variável
x = 100;
x = 'Breno';
x = 900;
x = '10';
const y = 800;

/*
Funciona da mesma maneira que o any:
  - Podemos receber qualquer tipo de valor na variável tipada como unknown, porém ele é mais seguro, pois ele lança erros de compilação ao tentar executar operações inválidas e te força a fazer a checagem de tipo, ao contrário do tipo any.
*/

console.log(x + y); // Erro de compilação: 'x' is of type 'unknown'.

// Para evitar esse erro, precisamos realizar o Type Narrowing
if (typeof x === 'number') console.log(x + y); // Sem erros -> só executa a operação se for do tipo especificado
