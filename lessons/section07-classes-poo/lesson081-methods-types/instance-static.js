// INSTANCE METHODS x STATIC METHODS

// Vericando contexto do this em funções normais
function teste () {
    console.log(this)
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }

    aumentarVolume() { this.volume += 2 } // Método de instância (depende de uma instanciação para funcionar)
    reduzirVolume() { this.volume -= 2 } // Método de instância (depende de uma instanciação para funcionar)

    static trocaPilha() { // Método estático (não depende da instância para funcionar. Chama-se diretamente na Classe-Mãe)
        console.log('Todas as pilhas foram trocadas!')
        console.log(this.volume) // Retorna undefined! Sem o new, o construtor não é chamado e não tem acesso ao this e a nenhum dado de instância
    }

    static soma(x, y) { 
        console.log(this)
        return x + y } // Método estático
}

// Intanciação e testes
const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume()
console.log(controle1)

// Consumindo métodos estáticos independentes de instanciação
ControleRemoto.trocaPilha() 
console.log(ControleRemoto.soma(1, 2))
teste()
