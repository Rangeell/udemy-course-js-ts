// SuperClass - Classe mãe
function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function (valor) {
    // Impede a pessoa de sacar caso o saldo seja menor que o valor requerido e mostra o saldo atual do cliente.
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente! ${this.saldo}`)
        return
    }

    this.saldo -= valor // Reduz o saldo de acordo com o valor requerido
    this.verSaldo()
}

Conta.prototype.depositar = function (valor) {
    this.saldo += valor // Soma o saldo de acordo com o valor requerido
    this.verSaldo()
}

Conta.prototype.verSaldo = function () {
    console.log(`Ag/C: ${this.agencia}/${this.conta} | Saldo: ${this.saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
}

// Sub-Classe/Classe filha - ContaCorrente
function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo) // Linka os parâmetros e o contexto do this
    this.limite = limite // Adiciona um parâmetro específico desta conta
}

// Linka os prototypes
ContaCorrente.prototype = Object.create(Conta.prototype) // Herda todos os métodos de Conta, porém ContaCorrente perde seu construtor 
ContaCorrente.prototype.constructor = ContaCorrente // Retorna o Construtor de volta

// Sobrescreve o método .sacar() da Conta para a Conta Corrente - POLIMORFISMO
// Esse método vai aceitar valores negativos (até o limite negativo)
ContaCorrente.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente! ${this.saldo}`)
        return
    }

    this.saldo -= valor // Reduz o saldo de acordo com o valor requerido
    this.verSaldo()
}

// Sub-Classe/Classe Filha - ContaPoupança
function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}
ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca

const conta1 = new Conta(11, 22, 10)
const contaCorrente = new ContaCorrente(11, 22, 0, 100)
const contaPoupanca = new Conta(12, 33, 0)

// Fazendo os testes
contaCorrente.depositar(10)
contaCorrente.sacar(110)
contaCorrente.sacar(1)

console.log('-'.repeat(40))

contaPoupanca.depositar(10)
contaPoupanca.sacar(110)
contaPoupanca.sacar(1)