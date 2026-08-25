/*
Exercise 008 — Order Management

Difficulty: 🟡 Medium

📝 Enunciado

    Você deverá criar um pequeno sistema de gerenciamento de pedidos para um e-commerce.

    Um pedido (Order) possui diversos itens (OrderItem), e cada item representa um produto comprado, sua quantidade e seu subtotal.

    Neste exercício, o foco principal será modelar corretamente a relação entre os objetos.

    Você deverá trabalhar com:
        - classes como tipos;
        - encapsulamento;
        - associação;
        - composição;
        - readonly;
        - validações;
        - throw;
        - métodos de array;
        - getters;
        - tipos básicos do TypeScript.

O ponto mais importante é perceber que existe uma diferença entre
    Order ───────→ Product
    Order ───────→ OrderItem

    Um Product pode existir independentemente de um pedido. Já um OrderItem representa um elemento pertencente àquele pedido.

🎯 Objetivo
    Crie as seguintes classes:
        - Product
            Representa um produto disponível na loja.
            Deve possuir:
                - nome;
                - preço.
            
        - OrderItem
            Representa uma determinada quantidade de um produto dentro de um pedido.
            Deve possuir:
                - produto;
                - quantidade.
            O OrderItem deve conseguir calcular seu próprio subtotal.

    - Order
        - Representa o pedido.
        - Deve possuir uma coleção de OrderItem e permitir:
            - adicionar produtos ao pedido;
            - remover itens;
            - consultar os itens;
            - calcular o total.

📌 Contrato do Problema
    - Product
        - O nome deve ser uma string.
        - O nome deve possuir pelo menos 3 caracteres.
        - O preço deve ser um number maior que 0.
        - Caso algum dado seja inválido, lance Error.
        - Depois de criado, o preço não deve poder ser alterado externamente.

    - OrderItem
        - Deve receber um Product.
        - Deve receber uma quantidade.
        - A quantidade deve ser um número inteiro maior que 0.
        - Um item deve conseguir calcular seu subtotal.
        - O subtotal é:
            - preço do produto × quantidade

    - Order
        - Deve começar sem itens.
        - Deve permitir adicionar produtos com determinada quantidade.
        - Deve permitir remover itens.
        - Não deve permitir adicionar quantidade inválida.
        - Não deve permitir remover um item que não pertença ao pedido.
        - O total deve ser calculado com base nos itens existentes.
        - Um Product pode existir sem estar associado a qualquer Order.
        - O mesmo Product pode ser utilizado em vários pedidos.
        - Um OrderItem pertence ao pedido em que foi criado.
        - Não utilize any.
        - Não utilize herança.
        - Não utilize abstract.
        - Não utilize interface obrigatoriamente.

📋 Regras
    1. Crie uma classe Product.
    2. Crie uma classe OrderItem.
    3. Crie uma classe Order.
    4. Product deve possuir:
        - nome;
        - preço.
    5. OrderItem deve possuir:
        - produto;
        - quantidade.
    6. OrderItem deve possuir um comportamento para calcular seu subtotal.
    7. Order deve manter uma coleção de OrderItem.
    8. O estado interno de Order não deve poder ser modificado diretamente de fora.
    9. Deve ser possível adicionar produtos ao pedido.
    10. Deve ser possível remover itens do pedido.
    11. Deve ser possível consultar os itens do pedido.
    12. Deve ser possível consultar o total do pedido.
    13. O total deve ser calculado a partir dos subtotais dos itens.
    14. Um produto pode ser utilizado em mais de um pedido.
    15. Um produto não deve possuir nenhuma referência ao pedido.
    16. O OrderItem deve representar uma entidade pertencente ao pedido.
    17. Não crie cópias desnecessárias de Product.
    18. Não permita quantidade 0.
    19. Não permita quantidade negativa.
    20. Quantidades devem ser inteiras.
    21. Não permita produtos com preço inválido.
    22. Operações inválidas devem lançar Error.
    23. Uma operação inválida não deve deixar o objeto em estado inconsistente.
    24. Não utilize any.
*/

class Product {
    constructor(
        public readonly name: string,
        public readonly price: number,
    ) {
        if (this.name.length < 3) {
            throw new Error('O nome do produto deve possuir 3 ou mais caracteres!');
        }
        if (this.price <= 0) {
            throw new Error('O preço do produto deve ser maior que 0!');
        }
    }
}

class OrderItem {
    constructor(
        public readonly product: Product,
        private readonly quantity: number) {

        if (!Number.isInteger(quantity) || quantity <= 0) {
            throw new Error('Quantidade inválida!');
        }
    }

    subtotal(): number { return this.product.price * this.quantity; }
}

class Order {
    private _items: OrderItem[] = [];
    private _total: number = 0;

    get total(): number { return this._total; }
    get items(): readonly OrderItem[] { return this._items; }

    add(product: Product, quantity: number): void {
        const orderItem = new OrderItem(product, quantity);
        this._items.push(orderItem);
        this._total += orderItem.subtotal();
    }

    remove(product: Product): void {
        const currentItem = this._items.find(item => item.product === product);
    
        if (!currentItem) throw new Error('Produto inserido não pertence a nenhum pedido!');

        this._total -= currentItem.subtotal();
        this._items = this._items.filter(item => item.product !== product);
    }
}

//* EXEMPLES

// Criando produtos
const keyboard = new Product('Keyboard', 200);
const mouse = new Product('Mouse', 100);
console.log(keyboard.name);
console.log(keyboard.price);
/*
Keyboard
200
*/

// Criando um pedido
const order = new Order();
console.log(order.total); // 0

// Adicionando produtos
order.add(keyboard, 2);
order.add(mouse, 1);
console.log(order.total); // 500

// Consultando os itens
console.log(order.items); // Deve conter dois OrderItems.

// Removendo um item
order.remove(keyboard);
console.log(order.total); // 100
console.log(order.items);

//* CASO INVÁLIDOS
// Produto inválido
const product = new Product('TV', 0);
// Deve lançar Error.

// Quantidade inválida
order.add(mouse, 0); // Deve lançar Error.
order.add(mouse, -2); // Deve lançar Error.
order.add(mouse, 1.5); // Deve lançar Error.

// Removendo produto inexistente
const monitor = new Product('Monitor', 500);
order.remove(monitor); // Deve lançar Error.