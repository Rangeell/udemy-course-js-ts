/*
Exercise 005 — Shopping Cart

Difficulty: 🟢 Easy

📝 Enunciado
    Você deverá criar um pequeno sistema de carrinho de compras utilizando classes como tipos e associação simples.

    O sistema terá dois objetos principais:

    Product, que representa um produto;
    ShoppingCart, que representa um carrinho de compras.

    Um carrinho poderá trabalhar com produtos, mas os produtos existem independentemente do carrinho.

    Por exemplo, um produto pode existir antes de ser adicionado a um carrinho e pode continuar existindo depois que for removido dele.

    O objetivo é praticar a relação entre objetos sem utilizar herança.

🎯 Objetivo
    Crie uma classe Product e uma classe ShoppingCart.

    O ShoppingCart deverá conseguir:
        - adicionar produtos;
        - remover produtos;
        - consultar os produtos adicionados;
        - calcular o valor total da compra.

    O carrinho deverá possuir uma coleção de objetos Product.

    O ponto principal do exercício é perceber que:
        - ShoppingCart ───────→ Product
    O carrinho conhece/utiliza produtos, mas Product não precisa conhecer ShoppingCart.

📌 Contrato do Problema
    - Considere que o nome do produto é sempre uma string válida.
    - Considere que o preço inicial é sempre um number.
    - O preço deve ser maior que 0.
    - A validação do preço faz parte do exercício.
    - O carrinho pode ser criado vazio.
    - Um carrinho pode conter zero ou vários produtos.
    - Um mesmo objeto Product pode ser adicionado a mais de um carrinho.
    - Remover um produto deve remover apenas a ocorrência correspondente no carrinho.
    - O total deve ser calculado com base nos produtos atualmente presentes no carrinho.
    - Não utilize any.
    - Não utilize herança.
    - Não utilize abstract.
    - Não é necessário utilizar interfaces neste exercício.
    - Não é necessário utilizar getters/setters, exceto se você considerar que fazem sentido para proteger o estado.

📋 Regras
    1. Crie uma classe chamada Product.
    2.Product deve possuir:
        - nome;
        - preço.
    3. Nome e preço devem ser protegidos contra alteração direta externa.
    4. Crie uma classe chamada ShoppingCart.
    5. O carrinho deve manter uma coleção de Product.
    6. O carrinho deve começar vazio.
    7. Deve ser possível adicionar um Product.
    8. Deve ser possível remover um Product.
    9. Deve ser possível consultar os produtos do carrinho.
    10. Deve ser possível calcular o valor total.
    11. O total deve ser 0 quando o carrinho estiver vazio.
    12. Product não deve possuir nenhuma referência ao ShoppingCart.
    13. O ShoppingCart pode conhecer e utilizar Product.
    14. Não crie uma cópia desnecessária do objeto Product ao adicioná-lo ao carrinho.
    15. Não utilize any.
*/

class Product {
    constructor(
        public readonly name: string,
        public readonly price: number) { }
}

class ShoppingCart {
    private product: Product[] = [];
    private _total: number = 0;

    get total(): number { return this._total; }

    add(...products: Product[]): void {
        for (const product of products) {
            if (product.price <= 0) continue;

            this.product.push(product);
            this._total += product.price;
        }
    }

    remove(product: Product): void {
        if (!this.product.includes(product)) return;

        this.product = this.product.filter(p => p !== product);
        this._total -= product.price;
    }
}

//* EXAMPLES

// CRIANDO PRODUTOS
const keyboard = new Product('Keyboard', 200);
const mouse = new Product('Mouse', 100);
console.log(keyboard.name);
console.log(keyboard.price);
/*
Keyboard
200
*/

// CRIANDO UM CARRINHO VAZIO
const cart = new ShoppingCart();
console.log(cart.total);
// 0

// ADICIONANDO PRODUTOS
cart.add(keyboard);
cart.add(mouse);
console.log(cart.total);
// 300

// REMOVENDO PRODUTO
cart.remove(keyboard);
console.log(cart.total);
// 100