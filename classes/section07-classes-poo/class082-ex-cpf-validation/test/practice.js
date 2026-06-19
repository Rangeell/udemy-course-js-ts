/*
705.484.450-52
070.987.720-03

  7   0   0   4   4   4   8   8   8  (9 primeiros dígitos)
  x   x   x   x   x   x   x   x   x
 10   9   8   7   6   5   4   3   2  (Contagem regressiva de 10 a 2)
───────────────────────────────────
 70 + 0 + 0 +28 +24 +20 +32 +24 +16  =  234 (Soma total)

  7   0   0   4   4   4   8   8   8  digito1    (10 primeiros dígitos)
  x   x   x   x   x   x   x   x   x     x
 11  10   9   8   7   6   5   4   3     2       (Contagem regressiva de 11 a 2)
────────────────────────────────────────────
 77 + 0 + 0 +32 +28 +24 +45 +32 +24     =       (Soma total)


 Descobrir o digito
 Cálculo: 11 - (234 % 11)  ──►  11 - 3  =  8
 Como o resultado é 8 (menor ou igual a 9), o primeiro dígito calculado é 8.
*/

class ValidaCpf {
    constructor(cpfInserido) {
        if (arguments.length === 0) throw new Error('É necessário passar um cpf válido!')
        Object.defineProperty(this, 'cleanCpf', {
            enumerable: false,
            configurable: false,
            get: function () {
                return cpfInserido.replace(/\D+/g, '') //* Elimina qualquer caractere que não for um número (CPF limpo)
            }
        })
    }

    isSequence() {
        return this.cleanCpf[0].repeat(11) === this.cleanCpf //* Retorna true se o CPF limpo for uma sequêcia do primeiro número do mesmo
    }

    getDigit(halfCpf) {
        const cpfArray = Array.from(halfCpf) //? Converte string em array e retornar o mesmo. .split('') funcionaria da mesma forma?

        let regress = cpfArray.length + 1 //* Acumulador regressivo para multiplicar por cada número do CPF
        const total = cpfArray.reduce((acc, v) => { //* Loop que retorna a soma total de todos os números do CPF multiplicados pelo regressivo
            acc += Number(v) * regress
            regress--
            return acc
        }, 0)
        let digit = 11 - (total % 11)

        return digit >= 10 ? '0' : String(digit)
    }

    validates() {
        if (!this.cleanCpf) return false
        if (typeof this.cleanCpf !== 'string') return false
        if (this.cleanCpf.length !== 11) return false
        if (this.isSequence()) return false //* Valida se o CPF limpo não é uma sequência do primeiro número

        const halfCpf = this.cleanCpf.slice(0, -2) //* Retorna o CPF limpo sem os 2 últimos digitos
        const digit1 = this.getDigit(halfCpf)
        const digit2 = this.getDigit(halfCpf + digit1)
        const trueCpf = halfCpf + digit1 + digit2

        return trueCpf === this.cleanCpf
    }
}

// Testes
const cpf = new ValidaCpf('085.987.338-22')

console.log(cpf)
console.log(cpf.cleanCpf)
console.log(cpf.validates())
