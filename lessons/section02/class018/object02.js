function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade}
}


const pessoa1 = criaPessoa('Breno', 'Rangel', 23)
const pessoa2 = criaPessoa('Maria', 'Junior', 65)
const pessoa3 = criaPessoa('João', 'Moreira', 33)
console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)
console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome)