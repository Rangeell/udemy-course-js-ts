/*
- Constructor Function constrói objetos 
    - Sempre iniciar o seu nome com letra maiúscula
        - Exemplo: Pessoa (new)

- Factory Function fabrica objetos

- Ambas retornam objetos
*/

function Pessoa(nome, sobrenome) {
    //  Atributos ou métodos privados que não estão disponíveis fora do corpo do objeto
    const ID = 123456
    const metodoInterno = () => {

    }

    // Atributos ou método públicos, pois podemos acessar fora da função, utilizando a conotação de "."
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = () => {
        console.log(`${this.nome} ${this.sobrenome}`)
    }
}

const p1 = new Pessoa('Breno', 'Rangel')
const p2 = new Pessoa('Maria', 'Oliveira')
p1.nomeCompleto()
p2.nomeCompleto()