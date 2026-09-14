/*
LOOKAHEAD
    Positive: (?=) -> Retorna a correspondência apenas se o padrão especificado existir logo à frente
    Negative: (?!) -> Retorna a correspondência apenas se o NÃO padrão especificado existir logo à frente

São usados para checagem, ou seja, determinam se o padrão deve ou não ser consumido
São apenas usadas para chegar, elas não são consumidas 
*/

const { lockaround } = require('../base.js');
console.log(lockaround);
// console.log(lockaround.match(/.+[^in]active$/gim))

/*
Positive lookahead (frase que tem active)
    .+ -> Consome
    (?=[^in]active) -> Checagem para verificar se consome o ou não aquele padrão

    Basicamente: "Cheque se esse padrão existe, se existir, retorne a minha expressão regular"
*/

// Frases que tem "active"
console.log(lockaround.match(/.+(?=[^in]active)/gim)) // Positive lookahead -> Retorna o que for active
console.log(lockaround.match(/^(?!.+inactive).+$/gim)) // Negative lookahead -> Retorna o que NÃO for inactive

// Frases que NÂO tem "active"
console.log(lockaround.match(/.+(?=\s+inactive)/gim)) // Positive lookahead -> Retorna o que for inactive
console.log(lockaround.match(/^(?!.+[^in]active).+$/gim)) // Negative lookahead -> Retorna o que NÃO for active
