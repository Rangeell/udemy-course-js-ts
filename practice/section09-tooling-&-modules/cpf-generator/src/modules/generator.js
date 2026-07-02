import validCpf from "./valid-cpf.js"

export default class GeneratorCpf {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min))
    }

    formatCpf(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        )
    }

    generateCpf() {
        const noDigitCpf = this.rand()
        const digit1 = validCpf.getDigit(noDigitCpf)
        const digit2 = validCpf.getDigit(noDigitCpf + digit1)
        const newCpf = noDigitCpf + digit1 + digit2

        return this.formatCpf(newCpf)
    }
}



