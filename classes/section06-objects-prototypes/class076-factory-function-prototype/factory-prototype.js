// Primeira Forma - Ainda com um pouco de acoplamento

function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = { // Cria um objeto que vai ser o prototype de cada uma das pessoas

        // Métodos
        falar() {
            console.log(`${this.nome} está falando`)
        },
        comer() {
            console.log(`${this.nome} está comendo`)
        },
        beber() {
            console.log(`${this.nome} está bebendo`)
        }
    }

    return Object.create(pessoaPrototype, { // Linka o prototype/métodos, porém temos que criarmos os atributos
        nome: {
            value: nome,
            enumerable: true,
            configurable: true,
            writable: true
        },
        sobrenome: {
            value: sobrenome,
            enumerable:true,
            configurable:true,
            writable:true,
        }
    })
}

const p1 = criaPessoa('Breno', 'Rangel')
console.log(p1)
p1.comer()
