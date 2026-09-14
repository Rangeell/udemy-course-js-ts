/*
LOOKBEHIND
    Positive: (?<=) -> Retorna a correspondência apenas se o padrão especificado existir logo atrás
    Negative: (?<!) -> Retorna a correspondência apenas se o NÃO padrão especificado existir logo atrás

São usados para checagem, ou seja, determinam se o padrão deve ou não ser consumido
São apenas usadas para chegar, elas não são consumidas 
*/

const { lockaround } = require('../base.js');
console.log(lockaround);

// Frases que tem "ONLINE"
// console.log(lockaround.match(/(?<=online\s+)\S+.*/gim)) // Positive -> Retorna frases que começam com "ONLINE"

// Frases que NÃO tem "ONLINE"
// Queremos encontrar tudo que está na linha, mas a frase não deve começar com "ONLINE"
console.log(lockaround.match(/^.+(?>!online.+)$/gim)) // Negative -> Retorna Frases que NÃO começam com "ONLINE"