/*
O `Mediator` guarda uma lista de todos os vendedores e centraliza as solicitações. Quando um cliente solicita uma compra, o mediador vasculha os estoques dos vendedores cadastrados, efetua a baixa e entrega ao comprador.
*/

import type { Seller } from './seller';
import type { SellerProduct } from './seller-product';

// Classe Mediadora Concreta (SellerBuyerMediator)
export class Mediator {
  private sellers: Seller[] = [];

  // Registra vendedores no mediador e estabelece o vínculo bidirecional
  addSeller(...sellers: Seller[]): void {
    sellers.forEach(seller => {
      this.sellers.push(seller);

      /*
       RESOLUÇÃO DE ACOPLAMENTO:
        Associa a referência desta instância do mediador (this) ao vendedor. Essa etapa é crucial para evitar referências 'undefined' no vendedor, dispensando a necessidade de passar o mediador no construtor do Seller.
      */
      seller.setMediator(this); // Vincula o mediador ao vendedor
    });
  }

  // Intermedia a compra varrendo os vendedores sequencialmente até localizar o item
  buy(id: string): SellerProduct | void {
    let product: SellerProduct | void;

    for (let i = 0; i < this.sellers.length; i++) {
      product = this.sellers[i]?.sell(id); // Faz o Seller vender o produto (esse método retorna o produto vendido)

      if (product) {
        console.log(`\n[Mediator]: Produto encontrado e comprado: ${product.name} (R$ ${product.price})`);
        return product;
      }
    }

    // Trata a ausência do produto caso nenhum vendedor possua o ID informado
    console.log(`\n[Mediator]: Não foi encontrado nenhum produto com a ID "${id}".`);
  }

  // Varre todos os vendedores cadastrados e consolida a exibição do catálogo
  showProducts(): void {
    this.sellers.forEach(seller => seller.showProducts()); // Delega ação para cada seller
  }
}
