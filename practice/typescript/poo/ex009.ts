/*
Exercise 009 — Shape Area Calculator

Difficulty: 🟡 Medium

📝 Enunciado
    Você deverá criar um sistema para representar diferentes tipos de formas geométricas e calcular suas áreas.

    O sistema terá uma classe abstrata Shape e duas classes concretas:
        - Rectangle;
        - Circle.

    Todas as formas possuem um comportamento em comum: calcular sua área.

    Porém, cada forma possui uma fórmula diferente.

    A ideia deste exercício é começar a combinar:
        - abstração;
        - herança;
        - polimorfismo;
        - encapsulamento;
        - atributos e métodos abstract;
        - getters;
        - validações;
        - super;
        - classes como tipos.

    Além disso, você deverá criar uma função que trabalhe apenas com o tipo abstrato Shape, sem precisar saber qual forma concreta recebeu.

🎯 Objetivo
    Crie uma classe abstrata chamada Shape. Ela deverá definir um contrato para todas as formas:
        - possuir um nome;
        - calcular sua área.

    Depois crie:
             Shape
             /   \
            /     \
     Rectangle    Circle

    - Rectangle deve possuir:
        - largura;
        - altura.
        - Sua área será: largura × altura

    Circle deve possuir:
        - raio.
        - Sua área será: π × raio²

    Por fim, crie uma função printArea() que receba qualquer Shape e retorne uma string contendo o nome da forma e sua área.

    A função não deve verificar manualmente se recebeu um Rectangle ou Circle.

📌 Contrato do Problema
    - O nome da forma deve ser uma string válida.
    - A largura deve ser um number maior que 0.
    - A altura deve ser um number maior que 0.
    - O raio deve ser um number maior que 0.
    - As validações fazem parte do exercício.
    - Valores inválidos devem lançar Error.
    - Shape deve ser uma classe abstrata.
    - Shape deve possuir um método abstrato calculateArea().
    - Rectangle deve herdar de Shape.
    - Circle deve herdar de Shape.
    - Rectangle e Circle devem implementar calculateArea().
    - Utilize super nos construtores das classes derivadas.
    - printArea() deve aceitar qualquer Shape.
    - printArea() não pode utilizar instanceof.
    - printArea() não pode verificar manualmente o tipo concreto da forma.
    - Não utilize any.

📋 Regras
    1. Crie uma classe abstrata chamada Shape.
    2. Shape deve possuir um atributo protegido contendo o nome da forma.
    3. Shape deve possuir um método abstrato:
        - calculateArea(): number
    4. Crie uma classe Rectangle que herde de Shape.
    5. Rectangle deve possuir largura e altura.
    6. Crie uma classe Circle que herde de Shape.
    7. Circle deve possuir raio.
    8. Todos os valores numéricos devem ser maiores que 0.
    9. Valores inválidos devem lançar Error.
    10. Utilize super nos construtores das classes derivadas.
    11. Rectangle deve calcular sua própria área.
    12. Circle deve calcular sua própria área.
    13. Crie uma função:
        - printArea(shape: Shape): string
    14. A função deve funcionar com qualquer objeto que seja um Shape.
    15. Não utilize instanceof.
    16. Não utilize any.
    17. Não crie uma função específica para cada tipo de forma.
    18. Não é necessário utilizar interfaces.
    19. Não é necessário utilizar setters neste exercício.
*/

abstract class Shape {
    protected constructor(protected readonly _name: string) {
        if (!_name) throw new TypeError('Nome de forma inválida!');
    }

    get name(): string { return this._name; }

    abstract calculateArea(): number;
}

export class Rectangle extends Shape {
    constructor(
        name: string,
        private readonly width: number,
        private readonly height: number,
    ) {
        super(name);

        if (this.width <= 0) throw new RangeError('A largura deve ser maior que zero!');
        if (this.height <= 0) throw new RangeError('A altura deve ser maior que zero!');
    }

    calculateArea(): number { return this.width * this.height; }
}

export class Circle extends Shape {
    constructor(
        name: string,
        private readonly radius: number,
    ) {
        super(name);
        if (this.radius <= 0) throw new RangeError('O raio deve ser maior que zero!');
    }

    calculateArea(): number { return Math.PI * this.radius ** 2; }
}

function printArea(shape: Shape): string {
    return `${shape.name}: ${shape.calculateArea()}`;
}

//* EXAMPLES

const rectangle = new Rectangle('Rectangle', 10, 5);
console.log(rectangle.calculateArea());
// Deve retornar: 50

const circle = new Circle('Circle', 5);
console.log(circle.calculateArea());
// Deve retornar aproximadamente: 78.53981633974483

// Polimorfismo
const shapes: Shape[] = [
    new Rectangle('Rectangle', 10, 5),
    new Circle('Circle', 5),
];

for (const shape of shapes) {
    console.log(shape.calculateArea());
}
/*
Deve retornar aproximadamente:
50
78.53981633974483
*/

// Função printArea
const rectangle2 = new Rectangle('Rectangle', 10, 5);
console.log(printArea(rectangle2));
// Deve retornar algo equivalente a: Rectangle: 50
