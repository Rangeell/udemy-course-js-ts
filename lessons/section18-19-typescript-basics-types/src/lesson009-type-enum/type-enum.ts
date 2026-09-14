/*
enum é uma estrutura de dados não ordenada que utilizamos quando temos mais de uma opção para algo
*/

enum Cores {
  VERMELHO, // 0 -> valores setados por padrão
  AZUL, // 1
  AMARELO, // 2
}

// Mapeamento reverso -> valor aponta para a sua chave e vice-versa
console.log(Cores);
console.log(Cores.VERMELHO); // 0
console.log(Cores[0]); // Vermelho

// Setando valores numéricos específicos
enum Cores2 {
  VERMELHO = 10,
  AZUL = 100,
  AMARELO = 200,
}
console.log(Cores2);
console.log(Cores2[0]); // Erro -> Retorna undefined sem avisos prévios ao tentar acessar uma chave inexistente

// Uso de string e misto
enum Cores3 {
  VERMELHO = 10,
  AZUL = 100,
  AMARELO = 200,
  ROXO = 'Roxo',
  VERDE = 201, // Precisamos inicializar um valor, pois ele não sabe continuar a partir de 'Roxo'
  ROSA, // Não precisamos inicializar, pois 202 é o próximo valor lógico
}
console.log(Cores3);
console.log(Cores3.ROXO);

// Enum Merging
enum Cores3 { // Une os dois enums de mesmo nome
  MARROM,
  BRANCO,
}
console.log(Cores3);

// Uso com funções
function escolhaACor(cor: Cores3): void {
  if (typeof cor === 'number') {
    console.log(Cores3[cor]);
  } else console.log(cor);
}

escolhaACor(Cores3.AMARELO);
escolhaACor(Cores3.ROXO);
