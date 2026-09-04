/*
Exercise 002 — Encapsulated Bank Account

Difficulty: 🟢 Easy

📝 Enunciado

    Você deverá criar uma classe BankAccount que represente uma conta bancária simples.

    A conta possui um saldo, mas esse saldo não deve poder ser alterado diretamente de fora da classe.

    A classe deverá permitir:
        - consultar o saldo;
        - realizar depósitos;
        - realizar saques.

    A ideia principal é praticar encapsulamento, utilizando modificadores de acesso, além de começar a trabalhar com getters e métodos de instância em TypeScript.

🎯 Objetivo

    Implemente a classe BankAccount de forma que o saldo seja protegido contra alterações externas indevidas.

    Você deverá decidir:
        - quais atributos devem ser private;
        - quais métodos devem ser public;
        - como o saldo poderá ser consultado;
        - como depósitos e saques deverão modificar o saldo.

📌 Contrato do Problema
    - Considere que o valor inicial da conta é sempre um número válido e maior ou igual a 0.
    
    - Considere que os valores de depósito e saque são sempre números.
    
    - A validação dos valores de depósito e saque faz parte do exercício.
    
    - Um depósito deve aceitar somente valores maiores que zero.
    
    - Um saque deve aceitar somente valores maiores que zero.
    
    - Um saque não pode ser realizado caso o valor seja maior que o saldo disponível.
    
    - Quando uma operação for inválida, o saldo deve permanecer inalterado.
    
    - Você pode decidir como representar o resultado de uma operação inválida, desde que sua decisão seja coerente e fique clara no código.

📋 Regras
    1. Crie uma classe chamada BankAccount.
    2. O saldo deve ser privado.
    3. O saldo não pode ser alterado diretamente através de uma instância da classe.
    4. Deve existir uma forma pública de consultar o saldo.
    5. Deve existir um método público para realizar depósitos.
    6. Deve existir um método público para realizar saques.
    7. O depósito deve aumentar o saldo.
    7. O saque deve diminuir o saldo somente quando for permitido.
    8. Não é permitido criar um método público que simplesmente permita definir qualquer saldo arbitrariamente.
    9. Não utilize any.
    10. Não é necessário utilizar herança, interfaces ou classes abstratas neste exercício.
*/

class BankAccount {
    constructor(private _balance: number) { }

    get balance(): number {
        return this._balance;
    }

    deposit(value: number): void {
        if (value <= 0) return;
        this._balance += value;
    }

    withdraw(value: number): void {
        if (value > this._balance || value <= 0) return;
        this._balance -= value;
    }
}

//* EXAMPLES
const account = new BankAccount(100);
account.deposit(50);
console.log(account.balance);
// Deve resultar em: 150

const account2 = new BankAccount(200);
account2.withdraw(80);
console.log(account2.balance);
// Deve resultar em: 120

const account3 = new BankAccount(100);
account3.withdraw(150);
console.log(account3.balance);
// O saldo deve continuar: 100

const account4 = new BankAccount(100);
account4.deposit(-50);
console.log(account4.balance);
// O saldo deve continuar: 100