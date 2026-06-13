/*
Factory functions que retornam ou criam objetos diretamente
*/

function createPerson(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        fala(assunto) {
            return `${this.nome} está ${assunto}.`
        },
        altura,
        peso,
        imc() {
            const indice = this.peso / this.altura ** 2
            return indice.toFixed(2)
        }
    }
}

const p1 = createPerson('Breno', 'Rangel', 1.80, 80)
console.log(p1.fala('falando sobre JS'))
console.log(p1.imc())

console.log('Pessoa 2 ⬇️')

const p2 = createPerson('Maria', 'Joaquina', 1.60, 48)
console.log(p2.fala('falando alguma coisa'))
console.log(p2.imc())

