/*
- Retorne as pessoas que tem o nome com 5 letras ou mais
- Retorne as pessoas com mais de 50 anos
- Retorne as pessoas cujo nome termina com a letra A
*/
const pessoas = [
    { nome: 'Breno', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduarda', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Joana', idade: 47 }
]

const pessoasComNomeGrande = pessoas.filter(valor => valor.nome.length >= 5)
const pessoasMaisDeMaisDeCinquentaAnos = pessoas.filter(valor => valor.idade > 50)
const nomeTerminaComA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'))

console.log(pessoasComNomeGrande)
console.log(pessoasMaisDeMaisDeCinquentaAnos)
console.log(nomeTerminaComA)