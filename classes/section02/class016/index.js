const nome = 'Breno Rangel'
const alunos = ['Luiz', 'Maria', 'João']

alunos.push('Abacate', 'Abobrinha')
delete alunos[2]
alunos[alunos.length] = 'Banana'
console.log(alunos.slice(-1))
alunos.push('Lasanha')
alunos.unshift('Escondidinho')
const removidos = [alunos.pop(), alunos.shift()]

console.log(alunos.length)

for (let i in alunos){
    console.log(alunos[i])
}
// console.log(alunos[2])

console.log(`Removidos: ${removidos}, ${alunos[2]}`)
console.log(alunos instanceof Array)
console.log(`A constante alunos é considerada um "${typeof alunos}" indexadado`)