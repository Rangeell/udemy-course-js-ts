// Propriedade/privada privada (fora do objeto)
const _velocidade = Symbol('velocidade')

class Carro {
    constructor(nome) {
        this.nome = nome
        this[_velocidade] = 0 // Acessa a propriedade fora do objeto. Agora temos acesso dentro do objeto
    }

    // Getter que garante que, ao tentar atribuir c1.velocidade = 10500, não funcione
    // Guarda o valor real
    get velocidade() { // Faz o método se comportar como propriedade
        console.log('GETTER')
        return this[_velocidade]
    }

    // Barra atribuições que vão contra regras de negócio
    set velocidade(valor) {
        console.log('SETTER')
        if (typeof valor !== 'number') return
        if (valor >= 100 || valor <= 0) return
        this[_velocidade] = valor
    }

    acelerar() {
        if (this[_velocidade] >= 100) return
        this[_velocidade]++
    }

    freiar() {
        if (this[_velocidade] <= 0) return
        this[_velocidade]--
    }
}
const c1 = new Carro('Fusca')

for (let i = 0; i <= 200; i++) {
    c1.acelerar()
}
console.log(c1)

console.log('-'.repeat(10))

console.log(c1.velocidade) // Usando Getter

console.log('-'.repeat(10))

console.log(c1.velocidade = 55) // Usando Setter
