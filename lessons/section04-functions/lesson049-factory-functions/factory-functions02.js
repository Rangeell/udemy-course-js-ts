/*
Getter
    Palavra chave get para transformar um método em atributo do objeto, o que possibilita eliminarmos os parênteses na hora de chamar essa "função", pois agora ela é um atributo como os demais.
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
        // Getter
        get imc() {
            const indice = this.peso / this.altura ** 2
            return indice.toFixed(2)
        }
    }
}

const p1 = createPerson('Breno', 'Rangel', 1.80, 80)
console.log(p1.fala('falando sobre JS'))
console.log(p1.imc)

console.log('Pessoa 2 ⬇️')

const p2 = createPerson('Maria', 'Joaquina', 1.60, 48)
console.log(p2.fala('falando alguma coisa'))
console.log(p2.imc)

