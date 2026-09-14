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
    function ValidatesCpf(cpfEnviado) {
        if (arguments.length === 0) return false
        Object.defineProperty(this, 'cleanCpf', {
            enumerable: false,
            configurable: false,
            get: function () {
                return cpfEnviado.replace(/\D+/g, '')
            }
        })
    }

    ValidatesCpf.prototype.isValid = function () {
        if (typeof this.cleanCpf === 'undefined') return false
        if (this.cleanCpf.length !== 11) return false
        if (this.isSequence()) return false

        const cpfNoDigit = this.cleanCpf.slice(0, -2)
        const digit1 = this.getDigit(cpfNoDigit)
        const digit2 = this.getDigit(cpfNoDigit + digit1)
        const newCpf = cpfNoDigit + digit1 + digit2

        return this.cleanCpf === newCpf
    }

    ValidatesCpf.prototype.getDigit = function (cpfNoDigit) {
        const cpfArray = Array.from(cpfNoDigit)

        let regress = cpfNoDigit.length + 1
        const total = cpfArray.reduce((acc, v) => {
            acc += (regress * Number(v))
            regress--
            return acc
        }, 0)
        const digit = 11 - (total % 11)

        return digit > 9 ? '0' : String(digit)
    }

    ValidatesCpf.prototype.isSequence = function () {
        return this.cleanCpf[0].repeat(this.cleanCpf.length) === this.cleanCpf
    }
    cpf = new ValidatesCpf('705.484.450-52')
    console.log(cpf.isValid())
})()
