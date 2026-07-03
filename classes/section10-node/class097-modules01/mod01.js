const nome = 'Breno'
const sobrenome = 'Rangel'

const falaNome = () => `${nome} ${sobrenome}` 

// Caminho completo de atribução
/*
module.exports.nome = nome
module.exports.sobrenome = sobrenome
module.exports.falaNome = falaNome
*/

// Atalhos - a variável exports aponta para o objeto module, ou seja, ele é ume referência
module.exports.nome = nome
exports.sobrenome = sobrenome
exports.falaNome = falaNome
this.qualquerCoisa = 'O que eu quiser exportar'

// console.log(exports)
