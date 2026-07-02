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


export default class validCpf {
    constructor(cpf) {
        if (arguments.length === 0) throw new Error('É preciso enviar um cpf válido!')
        Object.defineProperty(this, 'cleanCpf', {
            enumerable: false,
            configurable: false,
            get: () => {
                return cpf.replace(/\D+/g, '')
            }
        })
    }

    valid() {
        if (!this.cleanCpf) return false
        if (typeof this.cleanCpf !== 'string') return false
        if (this.cleanCpf.length !== 11) return false
        if (this.isSequence()) return false

        const halfCpf = this.cleanCpf.slice(0, -2)
        const digit1 = this.getDigit(halfCpf)
        const digit2 = this.getDigit(halfCpf + digit1)
        const trueCpf = halfCpf + digit1 + digit2

        return trueCpf === this.cleanCpf
    }

    isSequence() {
        return this.cleanCpf.charAt(0).repeat(11) === this.cleanCpf
    }

    static getDigit(halfCpf) {
        const cpfArray = Array.from(halfCpf)

        let regress = halfCpf.length + 1
        let digit = cpfArray.reduce((acc, v) => {
            acc += regress * Number(v)
            regress--
            return acc
        }, 0)

        digit = 11 - (digit % 11)

        return digit >= 10 ? '0' : String(digit)
    }
}

