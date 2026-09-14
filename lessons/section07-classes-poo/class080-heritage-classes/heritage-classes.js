class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false // Padrão de fábrica
    }
    ligar() {
        if (this.ligado) { // Se for true
            console.log(`${this.nome} já está ligado!`)
            return
        }
        console.log(`${this.nome} foi ligado!`)
        this.ligado = true // Mudando/controlando estado
    }
    desligar() {
        if (!this.ligado) { // Se for false
            console.log(`${this.nome} já está desligado!`)
            return
        }
        this.ligado = false // Mudando/controlando estado
        console.log(`${this.nome} foi desligado!`)
    }
}

// Apenas com essa linha, a sub-classe herda tudo (protótipo) que tem na super-classe indicada
class Smartphone extends DispositivoEletronico { // Classe irmã da Classe Tablet
    constructor(nome, cor, modelo) {
        // Se o novo objeto precisa de propriedades exclusivas, ele de um construtor próprio. E o super se faz obrigatório para herdar os atributos e o this
        // "Super" vem de Super-Class (Classe - pai)
        super(nome) // Chama o construtor da classe pai (Super-Class)
        this.cor = cor
        this.modelo = modelo
    }
}

class Tablet extends DispositivoEletronico { // Classe irmã da Classe Smartphone
    constructor(nome, temWifi) {
        super(nome)
        this.temWifi = temWifi
    }

    ligar() { // Sobrescrita com reaproveitamento (Polimorfismo)
        console.log('Você alterou o método ligar!')
        super.ligar() // Chama o método ligar() original que está lá na classe pai
    }

    falaOi() { // Apenas para mostrar que podemos ter métodos específicos em classes
        console.log(`${this.nome} está falanndo oi!`) 
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S 10')
console.log(s1)

const t1 = new Tablet('Ipad', true)
t1.ligar()
console.log(t1)
t1.falaOi()
