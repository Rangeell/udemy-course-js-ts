/*
Nesta aula prática, aplicamos o padrão de projeto Mediator na prática criando um ecossistema de compras e vendas (estilo Marketplace ou Mercado Livre).

O objetivo central foi desacoplar o comprador (`Buyer`) e os vendedores (`Seller`), garantindo que nenhum deles se conheça ou converse diretamente. Toda a busca por catálogo, a remoção de estoque e o fluxo de compra são centralizados e intermediados pela classe `Mediator`.
*/

import { Buyer } from './marketplace/buyer';
import { Mediator } from './marketplace/mediator';
import { Seller } from './marketplace/seller';

const mediator = new Mediator();

// Instanciação do Vendedor 1 e adição de produtos
const seller1 = new Seller();
seller1.addProduct({ id: '1', name: 'Camiseta', price: 49.9 });
seller1.addProduct({ id: '2', name: 'Caneta', price: 9.9 });

// Instanciação do Vendedor 2 e adição de produtos
const seller2 = new Seller();
seller2.addProduct({ id: '3', name: 'Carro', price: 49_000 });
seller2.addProduct({ id: '4', name: 'Lápis', price: 1.9 });

// Registro no mediador (configura o setMediator internamente)
mediator.addSeller(seller1, seller2);
mediator.showProducts();

const buyer = new Buyer(mediator);
buyer.viewProducts(); // Chama de dentro do mediator e exibe os `products` de todos os `Sellers`

// Realizando as compras via Comprador
buyer.buy('2'); // Compra a Caneta do vendedor 1
buyer.buy('3'); // Compra a Carro do vendedor 2

// Catálago atualizado após a compra (elementos são removidos)
console.log('\nCatálogo Atualizado');
buyer.viewProducts();
