import ValidaCPF from './ValidaCpf'

/*
- Gerar 9 digitos aleatórios
    - A partir desses 9 digitos, vamos gerar o primeiro digito e o segundo
    - Com isso, teremos matematicamente um CPF válido


*/
export default class GeraCPF {
    // Gera um número aleatório entre os números estabelecidos no parâmetro
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min)) // Converte número gerado para string
    }

    formatCpf(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        )
    }

    geraNovoCpf() {
        const cpfSemDigito = this.rand()
        const digito1 = ValidaCPF.geraDigito(cpfSemDigito) // Usando o método estático da ValidaCPF
        const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1) // Usando o método estático da ValidaCPF
        const novoCpf = cpfSemDigito + digito1 + digito2
        return this.formatCpf(novoCpf)
    }
}
