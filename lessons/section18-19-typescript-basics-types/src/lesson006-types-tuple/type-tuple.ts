/*
A tupla seria uma array com tipos bem específicos e tamanho fixo

- T? -> Torna um valor OPCIONAL
  Isso signifca que o valor pode ser do tipo declarado ou UNDEFINED

- ...T[] -> O uso do Rest Operator declara que o restante dos valores daquele array deve ser de um determinado tipo

- readonly -> Torna um array imutável, evitando problemas com reatribuições e uso de métodos nativos como .pop() e .push()
*/

// Tuple
const dadosCliente1: [number, string] = [1, 'Breno'];
const dadosCliente2: [number, string, string] = [1, 'Breno', 'Rangel'];
const dadosCliente3: [number, string, string?] = [1, 'Breno']; // Torna o terceiro valor OPCIONAL (string ou undefined)

const dadosCliente4: [number, string, ...string[]] = [1, 'Breno', 'João', 'Maria']; // Declara que o RESTANTE do array deve ser do tipo string

const dadosCliente5: readonly [number, string] = [1, 'Breno']; // Declara que a tupla é imutável, ou seja, o array não pode ser alterado manualmente e muito menos usando métodos nativos como .pop() e .psuh()

// Duas sintaxe disponíveis para readonly
const array1: readonly string[] = ['Breno', 'Maria'];
const array2: ReadonlyArray<string> = ['Breno', 'Maria'];

dadosCliente1[0] = 10; // Não é imutável -> valor é alterado (desde que o tipo seja correto)
// dadosCliente1[2] = 'Vieira'; // Erro: Não podemos inserir novos valores manualmente além daqueles já foram declarados
dadosCliente1.pop(); // Não é um comportamento desejável e nem detectável pelo Typescriot (Perigoso)

// dadosCliente5.pop(); // Erro -> array imutável
// dadosCliente5.push(); // Erro -> array imutável
// dadosCliente5[0] = 10; // Erro -> array imutável

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);
console.log(dadosCliente5);
console.log(array1);
console.log(array2);
