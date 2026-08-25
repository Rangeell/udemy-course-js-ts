/*
Exercise 006 — Employee Management

Difficulty: 🟢 Easy

📝 Enunciado
    - Você deverá criar um pequeno sistema de gerenciamento de funcionários utilizando herança e polimorfismo.

    - O sistema terá uma classe base Employee e diferentes tipos de funcionários:
        - Developer;
        - Manager.

    - Todos os funcionários possuem informações e comportamentos em comum, mas cada tipo de funcionário possui uma forma diferente de calcular seu salário.

    - A ideia é começar a combinar conceitos que você já praticou:
        - classes;
        - encapsulamento;
        - classes como tipo;
        - herança;
        - sobrescrita de métodos;
        - polimorfismo;
        - super.

🎯 Objetivo
    Crie uma classe Employee que represente um funcionário genérico.
    
    Depois, crie:
        Employee
           ↑
           ├── Developer
           └── Manager

    A classe Employee deverá possuir:
        - nome;
        - salário base;
        - um método para calcular o salário final.

    Cada classe filha deverá implementar sua própria regra para calcular o salário.
    
    Regras salariais:
        - Developer
            Recebe um bônus de 10% sobre o salário base.
        - Manager
            Recebe um bônus de 20% sobre o salário base.
    
    A função responsável por processar os funcionários deverá trabalhar com o tipo Employee, sem precisar verificar qual classe concreta recebeu.

📌 Contrato do Problema
    - Considere que o nome recebido é sempre uma string válida.
    - Considere que o salário base recebido é sempre um number maior que 0.
    - Não é necessário validar nome ou salário.
    - A classe Employee deve possuir um método calculateSalary().
    - Developer e Manager devem possuir suas próprias implementações de calculateSalary().
    - O salário final deve ser calculado a partir do salário base.
    - Developer recebe 10% de bônus.
    - Manager recebe 20% de bônus.
    - A função de processamento deve aceitar qualquer Employee.
    - Não utilize any.
    - Utilize herança.
    - Utilize polimorfismo.
    - Utilize super na implementação das classes derivadas.
    - Não utilize interfaces neste exercício.
    - Não utilize abstract neste exercício.

📋 Regras
    1. Crie uma classe Employee.
    2. Employee deve possuir:
        - nome;
        - salário base;
        - método calculateSalary().
    3. O nome e o salário base devem ser protegidos contra alteração externa indevida.
    4. Crie uma classe Developer que herde de Employee.
    5. Crie uma classe Manager que herde de Employee.
    6. Developer deve sobrescrever calculateSalary().
    7. Manager deve sobrescrever calculateSalary().
    8. Developer deve aplicar bônus de 10%.
    9. Manager deve aplicar bônus de 20%.
    10. As classes derivadas devem utilizar super.
    11. Crie uma função processEmployee.
    12. processEmployee deve receber um Employee.
    13. processEmployee não pode verificar manualmente se o funcionário é Developer ou Manager.
    14. Não utilize instanceof.
    15. Não utilize any.
*/

class Employee {
    constructor(
        protected readonly name: string,
        protected readonly baseSalary: number) { }

    calculateSalary(): number { return this.baseSalary; }
}

class Developer extends Employee {
    constructor(name: string, baseSalary: number) {
        super(name, baseSalary);
    }

    calculateSalary(): number {
        return super.calculateSalary() + (this.baseSalary * 10 / 100);
    }
}

class Manager extends Employee {
    constructor(name: string, baseSalary: number) {
        super(name, baseSalary);
    }

    calculateSalary(): number {
        return super.calculateSalary() + (this.baseSalary * 20 / 100);
    }
}

//* EXEMPLES

const developer = new Developer('Rangel', 5000);
console.log(developer.calculateSalary()); // 5500
console.log(developer.calculateSalary()); // 5500
console.log(developer.calculateSalary()); // 5500
// Deve retornar: 5500

const manager = new Manager('Breno', 5000);
console.log(manager.calculateSalary());
// Deve retornar: 6000

const employees: Employee[] = [
    new Developer('Rangel', 5000),
    new Manager('Breno', 5000),
];
for (const employee of employees) {
    console.log(employee.calculateSalary());
}
/*
Deve retornar:
5500
6000
*/