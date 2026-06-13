const dados = {
    nome: 'Breno',
    sobrenome: 'Rangel',
    idade: 23,
    peso: 80,
    alturaEmM: 1.66
}

const agora = new Date()
const anoAtual = agora.getFullYear()
let anoNascimento = anoAtual - dados.idade
let imc = dados.peso / (dados.alturaEmM * dados.alturaEmM)

console.log(`${dados.nome} ${dados.sobrenome} tem ${dados.idade} anos, pesa ${dados.peso}kg, tem ${dados.alturaEmM}m de alturaEmM, seu IMC é de ${imc.toFixed(2)}kg/m2 e nasceu em ${anoNascimento}!`)
