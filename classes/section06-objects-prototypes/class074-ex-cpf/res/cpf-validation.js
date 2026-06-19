/*
705.484.450-52
070.987.720-03

  7   0   0   4   4   4   8   8   8  (9 primeiros dígitos)
  x   x   x   x   x   x   x   x   x
 10   9   8   7   6   5   4   3   2  (Contagem regressiva de 10 a 2)
───────────────────────────────────
 70 + 0 + 0 +28 +24 +20 +32 +24 +16  =  234 (Soma total)

 Cálculo: 11 - (234 % 11)  ──►  11 - 3  =  8
 Como o resultado é 8 (menor ou igual a 9), o primeiro dígito calculado é 8.
*/

(function myScope() {
    function ValidaCPF(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            configurable: false,
            get: function () {
                return cpfEnviado.replace(/\D+/g, '') // Remove qualquer coisa que não for um número da string.
            }
        })
    }


    ValidaCPF.prototype.valida = function () {
        if (typeof this.cpfLimpo === 'undefined') return false
        if (this.cpfLimpo.length !== 11) return false
        if (this.isSequencia()) return false // Se a função isSequencia retornar true, a função valida() retorna false

        const cpfParcial = this.cpfLimpo.slice(0, -2) // Elimina os 2 último digitos do CPF
        const digito1 = this.criaDigito(cpfParcial)
        const digito2 = this.criaDigito(cpfParcial + digito1)
        const novoCpf = cpfParcial + digito1 + digito2 // Concatemos os digitos que geramos para comparar e verificar se o CPF do usuário é válido

        return novoCpf === this.cpfLimpo // Retorna true ou false
    }

    // Função que a realiza a conta com reduce e descobre o digito
    // Essa função recebe como parâmetro a variável criada na função valida()
    ValidaCPF.prototype.criaDigito = function (cpfParcial) {
        const cpfArray = Array.from(cpfParcial) // Converte a string em um array

        let regressivo = cpfArray.length + 1 // Acumulador regressivo que vai multiplicar cada valor do array
        let total = cpfArray.reduce((acc, v) => {
            acc += (regressivo * Number(v))
            regressivo--
            return acc
        }, 0)

        const digito = 11 - (total % 11) // Conta pronta (regra do CPF)
        return digito > 9 ? '0' : String(digito)
        // Caso o resultado do digito seja maior que 10, o digito vai valer 0
        // Garantimos que o retorno seja uma string, pois iremos usá-lo para concatenar
    }

    ValidaCPF.prototype.isSequencia = function () {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length) // Repete o primeiro caracter de acordo com o tamanho da string

        return sequencia === this.cpfLimpo // Se for uma sequencia, essa função vai retornar true
    }

    const cpf = new ValidaCPF('705.484.450-52')

/*
Podemos reutilizar esse código em qualquer lugar que precisaríamos de uma validação de CPF, como formulários de alguma página
*/
// Simulando:
if (cpf.valida()) {
    console.log('CPF válido!')
} else {
    console.log('CPF inválido!')
}

    // console.log(cpf)
    // console.log(cpf.cpfLimpo)
    // console.log(cpf.valida())
})()