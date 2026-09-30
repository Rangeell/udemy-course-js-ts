/*
Nesta aula prática, exploramos a implementação do padrão Composite em TypeScript através de dois casos de uso reais: o modelo clássico de produtos e caixas e o modelo de composição de validações.

O padrão Composite é uma solução estrutural clássica do GoF projetada para representar hierarquias do tipo "parte-todo". Sua essência reside na capacidade de permitir que o código cliente trate objetos individuais (Folhas) e composições de objetos (Compostos) de forma uniforme. Do ponto de vista arquitetural, essa uniformidade é estratégica: ela reduz a complexidade do cliente ao eliminar verificações de tipo exaustivas, permitindo que estruturas ramificadas cresçam sem impactar a lógica que as consome.

Nesta aula, analisamos dois cenários de implementação pragmática:
  1. Gestão de Inventário: Um sistema de precificação onde produtos podem estar contidos em caixas que, recursivamente, podem estar dentro de outras caixas.
  2. Motores de Validação: A construção de fluxos dinâmicos onde regras atômicas de validação (tipo, formato, conteúdo) são combinadas em uma única regra complexa, tratada como um componente único pelo sistema.

A base de ambas as implementações reside na definição de um contrato comum que habilita a recursão natural da estrutura.

Este módulo é dedicado para mostrar o primeiro exemplo dessa aula:
  - Árvore de Produtos e Caixas (Product Composite)

A força do padrão Composite em estruturas de dados reside na Recursão Implícita. O código cliente chama um método no nó raiz e a mensagem é propagada através da árvore; o chamador não precisa conhecer a profundidade da hierarquia ou distinguir entre um item único e um contêiner.

- Classe Abstrata Component: Definimos aqui a interface comum. Note que, nesta abordagem, privilegiamos a Transparência.

- Classe lief: Representa o nó terminal. Ela é responsável por realizar o trabalho real (retornar o dado bruto) sem delegar para outros objetos.

- Classe Composta: O Composite mantém uma coleção de filhos e delega o comportamento solicitado para eles.
  - Análise: O método `getPrice()` utiliza o `reduce()` para acumular os valores. Se um filho for uma `ProductLeaf`, ele retorna seu preço; se for outro `ProductComposite`, a recursão é disparada internamente. O cliente permanece [[agnóstico]] a esse processo.
*/

// Contrato que lief e composite vão implementar (Classe Component)
export abstract class ProductComponent {
  abstract getPrice(): number;

  //! Violação do ISP -> força subclasses dependerem de métodos que elas não utilizam
  // eslint-disable-next-line
  add(product: ProductComponent): void { } // Método vazio para não forçar as subclasses a terem que implementá-lo (mas leaf vai ter esse método vazio)

  // eslint-disable-next-line
  remove(product: ProductComponent): void { } // Método vazio para não forçar as subclasses a terem que implementá-lo (mas leaf vai ter esse método vazio)

  //? Nesse exemplo, os método `add` e `remove` são facultativos, podemos manter nessa classe abstrata ou não
}

// Realiza o trabalho real (Classe lief (folha))
export class LiefProduct extends ProductComponent {
  constructor(public name: string, public price: number) {
    // Garamte que as propriedades e métodos da super classe sejam corretamente acessados e inicializados na subclasse
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

// Mantém coleção de filhos e delega ações solicitadas para eles (Classe Composite)
export class CompositeProduct extends ProductComponent {
  private children: ProductComponent[] = [];

  add(...products: ProductComponent[]): void {
    products.forEach(product => this.children.push(product));
  }

  // Remove um produto se encontrar o seu index
  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product); // Obtém o index o produto requisitado
    if (productIndex !== -1) this.children.slice(productIndex, 1);
  }

  // Delega ação para os filhos -> child.getPrice()
  getPrice(): number {
    return this.children.reduce((acc, child) => acc + child.getPrice(), 0);
  }
}

// Client Code

// Products 1
const pen = new LiefProduct('Caneta', 40);
const smartphone = new LiefProduct('Smartphone', 1_000);
const tShirt = new LiefProduct('Camiseta', 40);

// Product Box 1
const productBox = new CompositeProduct();
productBox.add(pen, smartphone, tShirt);

// Products 2
const tablet = new LiefProduct('Tablet', 2_000);
const kindle = new LiefProduct('Kindle', 300);

// Product Box 2
const anotherProductBox = new CompositeProduct();
anotherProductBox.add(tablet, kindle);

// Uma caixa dentro da outra (podemos fazer isso quantas vezes quisermos!)
productBox.add(anotherProductBox);

console.log(productBox);
console.log(productBox.getPrice());
