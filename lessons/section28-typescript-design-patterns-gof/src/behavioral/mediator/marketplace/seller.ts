/*
O vendedor gerencia seu próprio estoque local de produtos e notifica/responde ao mediador quando uma venda ocorre.

Mantém a coleção privada de seus produtos (`SellerProduct[]`). Expõe métodos para adicionar itens ao estoque (`addProduct`), listar seu estoque local (`showProducts`), associar o mediador (`setMediator`) e efetivar a baixa/venda de um item (`sell`).

Para que o `Seller` consiga disparar ações no mediador (ou vice-versa) sem que haja dependência circular durante a instanciação:

  1. A classe `Seller` declara a propriedade opcional `mediator?: SellerBuyerMediator` e disponibiliza o método `setMediator(mediator: SellerBuyerMediator)`.

  2. A inclusão do vendedor no mediador ocorre por meio do método `mediator.addSeller(...sellers)`.
*/

import type { Mediator } from './mediator';
import type { SellerProduct } from './seller-product';

// Classe Seller (Vendedor)
export class Seller {
  private products: SellerProduct[] = [];
  private mediator?: Mediator; // Propriedade opção que vamos usar setter para evitar dependência circular

  // Exibe os produtos contidos no estoque específico deste vendedor
  showProducts(): void {
    for (const product of this.products) {
      console.log(`[ID: ${product.id}] ${product.name} - R$ ${product.price}`);
    }
  }

  // Adiciona um ou múltiplos produtos ao estoque local do vendedor
  addProduct(...products: SellerProduct[]): void {
    products.forEach(product => this.products.push(product));
  }

  // Define/Atualiza a referência do mediador central para este vendedor
  setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }

  // Efetiva a venda e remoção de um produto do estoque pelo seu ID
  sell(id: string): SellerProduct | void {
    // Busca o índice do produto no array do estoque
    const productIndex = this.products.findIndex(product => product.id === id);

    // Se o produto não pertencer ao estoque deste vendedor, interrompe a execução
    if (productIndex === -1) return;

    /*
     NOTA TÉCNICA (Mutação de Estado):
       O método Array.prototype.splice altera (muta) o array original e retorna um novo array contendo os elementos removidos. Como a busca é por ID único, remove-se apenas 1 elemento no índice encontrado (productIndex), sendo necessário acessar a posição [0] do array retornado por splice.
    */
    const removedProducts = this.products.splice(productIndex, 1);

    // Retorna o produto individual que foi removido do estoque
    return removedProducts[0];
  }

  //* Poderíamos usar os métodos do Buyer nessa classe sem problemas
  /*
  viewProducts(): void {
    if (!this.mediator) return;
    this.mediator.showProducts();
  }

  buy(id: string): void {
    if (!this.mediator) return;
    this.mediator.buy(id);
  }
  */
}
