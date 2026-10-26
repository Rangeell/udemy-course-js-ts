/*
Métodos:
    - `get item()`:
        Um Getter que retorna uma cópia rasa da coleção de CarItem[] e garante imutabilidade em tempo de execução e compilação.

    - `get totalQuantity()`:
        Um Getter que retorna a quantidade de totais de itens atual do carrinho.

    - `addItems()`:
        Permite adicionar mais de um item simultaneamente e checa se determinado item já foi adicionado. Caso um item já tenha sido adicionado anteriormente, incrementamos a quantidade que já existe no carrinho na sua quantidade total atual (por meio de delegação) e continuamos a operação.

    - `removeItem()`:
        Permite remover um item da coleção de CartItem pelo ID único e retorna esse item removido. Caso o item não exista na coleção, retorna null.

    - `calculateTotal()`:
        Calcula o valor total da compra do carrinho, deleganto a ação para o CarItem.

    - `clear()`:
        Permite esvaziar o Carrinho por completo após a finalização da compra ou por ação explícita do usuário.
*/

import type { CartItemProtocol } from '../cart-item/cart-item-protocol.js';
import type { CartProtocol } from './cart-protocol.js';

export class Cart implements CartProtocol {
    private _items: CartItemProtocol[] = [];

    get items(): readonly CartItemProtocol[] {
        return Object.freeze([...this._items]);
    }

    get totalQuantity(): number {
        return this._items.reduce((acc, item) => acc + item.quantity, 0);
    }

    addItems(...items: CartItemProtocol[]): void {
        items.forEach(item => {
            const existingItem = this._items.find(current => current.product.id === item.product.id);

            if (existingItem) {
                existingItem.incrementQuantity(item.quantity);
                return;
            }

            this._items.push(item);
        });
    }

    removeItem(id: string): CartItemProtocol | null {
        const removedItem = this._items.find(item => item.product.id === id);
        if (!removedItem) { return null; }

        this._items = this._items.filter(item => item.product.id !== id);

        return removedItem;
    }

    calculateTotal(): number {
        return this._items.reduce((acc, item) => acc + item.subTotal, 0);
    }

    clear(): void { this._items = []; }
}