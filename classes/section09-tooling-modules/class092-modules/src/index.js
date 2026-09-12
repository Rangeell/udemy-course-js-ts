import mult, { nome as nome2, sobrenome2, idade, soma, Pessoa as Pessoa2 } from './module01' // Colocar a extensão do arquivo é opcional

const nome = 'João' // Sem o "as" acima, daria erro de colisão de variáveis já declaradas
const p1 = new Pessoa2('Breno', 'Rangel') // Importamos a classe como Pessoa2

console.log(p1)
console.log(nome)
console.log(nome2, sobrenome2, idade)
console.log(soma(idade, 3))
console.log(mult(10, 30))
