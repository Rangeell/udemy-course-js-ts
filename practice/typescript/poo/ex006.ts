/*
Exercise 006 — Abstract Payment Gateway
Difficulty: 🟡 Medium

📝 Enunciado
    Você foi contratado para criar um módulo de processamento de pagamentos para um e-commerce. Diferentes métodos de pagamento (como Cartão de Crédito e Pix) possuem taxas de processamento e regras específicas para autorização, mas compartilham a mesma estrutura base para identificação do valor e geração do recibo.

    Crie uma estrutura de classes que gerencie essa hierarquia utilizando uma classe abstrata.

🎯 Objetivo
    Treinar o uso de abstract class, métodos e atributos abstratos, herança (extends), o uso do super para reaproveitamento do construtor/métodos da classe pai e polimorfismo por herança.

📌 Contexto/Contrato
    - Todo pagamento possui um valor base (amount).
    - O valor do pagamento não pode ser menor ou igual a zero.
    - Cada método de pagamento aplica uma taxa percentual sobre o valor base:
    - CreditCardPayment: possui taxa fixa de 5% sobre o valor base.
    - O valor final a ser cobrado é o amount acrescido da taxa calculada.

📋 Regras
    1. Crie uma classe abstrata chamada PaymentProcessor.
    2. PaymentProcessor deve armazenar o valor base (amount) de forma protegida/privada.
    3. PaymentProcessor deve ter um método abstrato calculateFee(): number que cada subclasse deve obrigatoriamente implementar para retornar o valor absoluto da taxa.
    4. PaymentProcessor deve ter um método concreto getFinalAmount(): number que retorna a soma do valor base com a taxa calculada.
    5. PaymentProcessor deve ter um método abstrato process(): string que simula o processamento do pagamento.
    6. Crie a classe CreditCardPayment que herda de PaymentProcessor.
    7. Ela deve receber no construtor o valor base e o número do cartão (cardNumber: string).
    8. O número do cartão deve ser validado via Regex simples no construtor: deve conter exatamente 16 dígitos numéricos. Se for inválido, lance um erro (throw new Error(...)).
    9. Implemente o process() para retornar: "Pagando R$ [valor_final] no cartão [últimos_4_dígitos]..." (exiba apenas os últimos 4 dígitos do cartão por segurança).

    10. Crie a classe PixPayment que herda de PaymentProcessor.
    11. Ela deve receber no construtor o valor base e a chave Pix (pixKey: string).
    12. Implemente o process() para retornar: "Pagando R$ [valor_final] via Pix para a chave [pixKey]...".
    13. Não utilize any.
*/

export abstract class PaymentProcessor {
    constructor(protected readonly amount: number) {
        if (this.amount <= 0) throw new Error('Valor inválido');
    }

    getFinalAmount(): number { return this.amount + this.calculateFee(); }

    abstract process(): string
    abstract calculateFee(): number
}

export class CreditCardPayment extends PaymentProcessor {
    constructor(
        amount: number,
        private readonly cardNumber: string) {

        super(amount);

        const carNumberRegex = /^\d{16}$/;
        if (!carNumberRegex.test(cardNumber)) throw new Error('Número de cartão inválido!');
    }

    calculateFee(): number { return this.amount * 5 / 100; }

    process(): string {
        return `Pagando ${this.getFinalAmount()} no cartão ${this.cardNumber.slice(-4)}`;
    }
}

export class PixPayment extends PaymentProcessor {
    constructor(
        amount: number,
        private readonly pixKey: string) {

        super(amount);
    }

    calculateFee(): number { return 0; }

    process(): string {
        return `Pagando ${this.getFinalAmount()} via Pix para a chave ${this.pixKey}`;
    }
}

//* EXEMPLES

const creditCard = new CreditCardPayment(100, '1234567812345678');
console.log(creditCard.calculateFee()); // 5
console.log(creditCard.getFinalAmount()); // 105
console.log(creditCard.process()); // "Pagando R$ 105 no cartão 5678..."

const pix = new PixPayment(200, 'user@pix.com');
console.log(pix.calculateFee()); // 0
console.log(pix.getFinalAmount()); // 200
console.log(pix.process()); // "Pagando R$ 200 via Pix para a chave user@pix.com..."

const creditCard2 = new CreditCardPayment(200, '123'); // ERRO
console.log(creditCard2.calculateFee()); 