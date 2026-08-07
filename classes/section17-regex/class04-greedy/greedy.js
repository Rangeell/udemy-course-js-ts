/*
O metacaractere "." representa um "qualquer caractere" (exceto uma quebra de linha)

.+ > Pode repetir qualquer caractere uma ou mais vezes
*/

const { html } = require('../base.js');

// Comportamento padrão -> Greezy -> Encontra a maior ocorrência possível que satifaça a expressão
// Seleciona tudo do início ao fim -> retorna um array com um único índice
console.log(html.match(/<.+>.+<\/.+>/g))

// Comportamento -> Non-greezy / Lazy -> Busca selcionar o minímo de caracteres para fechar a expressão
// Retorna um array com cada uma das ocorrências
console.log(html.match(/<.+?>.+?<\/.+?>/g))