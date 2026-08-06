/*
Quantificadores:
    - * (Opcionais) -> Quantifica 0 ou n vezes -> equivalente a {0,}.
    - + (Obrigatório) -> Quantifica 1 ou n vezes -> equivalente a {1,}.
    - ? (Opcionais) -> Quantifica 0 ou 1 vez -> equivalente a {0,1}.
    - \ -> Caractere de escape.

    Para um controle mais refinado da quantidade de repetições, utilizam-se as chaves
    - {n} -> Exatamente "n" vezes.
    - {n, m} -> No mínimo "n" vezes e no máximo "m" vezes.
    - {n,} -> No mínimo "n" vezes, sem limite máximo.
    - {,n} -> De zero a "n" vezes.

Inserimos os quantificadores à direta do que queremos encontrar.
*/

/*
Usamos a "\" para poder escapar metacaracteres reservados da linguagem. 

Por exemplo: 
    Em RegEx, o ponto sozinho significa "qualquer caractere". 
    
    Para buscar um ponto real (como em extensões de arquivo `.jpg`), é obrigatório usar a barra invertida à esquerda do caractere que queremos escapar (nesse caso, o "."). 
    
    A barra invertida é o caractere de escape que anula a função especial de um meta-caractere.
*/

const { text, files } = require('../base');
// console.log(text);
// console.log(files);

// 'o' deve aparecer 1 ou mais vezes
const regExp1 = /Jo+ão+/gi
console.log(text.match(regExp1))

console.log()

// Encontra todos os ".jpeg" e ".jpg" (ignorando minúsculas e maiúsculas)
let regExp2 = /\.(jpg|jpeg)/gi
for (const file of files) {
    console.log(file.match(regExp2))
}

console.log()

// Forma mais simples do exemplo acima 
// Com o "?" dizemos que a letra "e" é opcional e pode aparecer 0 ou 1 vez
regExp2 = /\.jpe?g/gi
for (const file of files) {
    const valid = file.match(regExp2)

    if (!valid) continue

    console.log(file, valid)
}

console.log()

// Equivalente a /\.jpe?g/gi
regExp2 = /\.jpe{0,1}g/gi
for (const file of files) {
    const valid = file.match(regExp2)

    if (!valid) continue

    console.log(file, valid)
}
