/*
Travamento de objetos
    Usamos quando queremos que nenhum valor/atributo daquele objeto possa ser alterado
*/
// 

 

const p1 = new Pessoa('Breno', 'Rangel')
// Object.freeze(p1) // travando individualmente
p1.nome = 'Outra coisa'
console.log(p1.nomeCompleto())
