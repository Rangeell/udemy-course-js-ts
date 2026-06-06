/*
- Setter
    Palavra chave set

- this
    Uso do this para garantir que a alteração do nome ocorra corretamente e de forma automática. 
        Isso acontece porque o this usa o valor da chave do objeto de quem o chamou (p1) como referência, e não os valores passadas como argumentos.
*/

function createPerson(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto (valor) {
            valor =  valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
        },

        fala(assunto = 'falando sobre nada') {
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

p1.nomeCompleto = 'Maria Oliveira Silva'
console.log(p1.nomeCompleto)
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.imc)
console.log(p1.fala())