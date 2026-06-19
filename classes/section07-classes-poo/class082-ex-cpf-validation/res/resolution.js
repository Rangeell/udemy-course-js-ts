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
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: false,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, '')
    })
  }

  isSequencia() {
    return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo //* chatAt(0) retorna o primeiro caractere
  }

  geraNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
    const digito1 = ValidaCpf.geraDigito(cpfSemDigitos) // Para métodos static, usamos o nome da classe para chamá-lo, ao invés do this
    const digito2 = ValidaCpf.geraDigito(cpfSemDigitos + digito1)
    this.novoCpf = cpfSemDigitos + digito1 + digito2 //* Usar "this.novoCpf" permite que esse valor seja acessado na função valida() depois (por conta do "this")
  }

  //* Como não teve a necessidade de usar o this nessa função, ela pode ser facilmente um método static
  static geraDigito(cpfSemDigitos) {
    let total = 0
    let reverso = cpfSemDigitos.length + 1

    for (let stringNumerica of cpfSemDigitos) {
      total += reverso * Number(stringNumerica)
      reverso--
    }

    const digito = 11 - (total % 11)
    return digito <= 9 ? String(digito) : '0'
  }

  valida() {
    if (!this.cpfLimpo) return false
    if (typeof this.cpfLimpo !== 'string') return false
    if (this.cpfLimpo.length !== 11) return false
    if (this.isSequencia()) return false
    this.geraNovoCpf()

    return this.novoCpf === this.cpfLimpo
  }
}
const cpf = new ValidaCpf('070.987.720-03')

if (cpf.valida()) {
  console.log('CPF válido')
} else {
  console.log('CPF invalido')
}