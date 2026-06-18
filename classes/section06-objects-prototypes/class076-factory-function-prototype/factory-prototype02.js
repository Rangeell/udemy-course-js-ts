// Segunda Forma - Trabalhando com Composição / Desacoplamento

// Cria objetos literais que guardam apenas as funções de comportamento/métodos
// Desacoplamento
const falar = {
    falar() {
        console.log(`${this.nome} está falando`)
    },
}
const comer = {
    comer() {
        console.log(`${this.nome} está comendo`)
    },
}
const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`)
    },
}

// Cria o objeto que será o prototype fora da função construtora
const pessoaPrototype = { ...falar, ...comer, ...beber } // Usamos o spred operator para copiar os métodos para dentro dele / A cópia pode ser feita também com Object.assing()

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, { // Linka o prototype/métodos, porém temos que criarmos os atributos
        nome: {
            value: nome,
            enumerable: true,
            configurable: true,
            writable: true
        },
        sobrenome: {
            value: sobrenome,
            enumerable: true,
            configurable: true,
            writable: true,
        }
    })
}

const p1 = criaPessoa('Breno', 'Rangel')
console.log(p1)
p1.falar()
p1.comer()
p1.beber()
