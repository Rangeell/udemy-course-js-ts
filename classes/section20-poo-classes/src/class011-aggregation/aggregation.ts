/*
RELAÇÕES:
  *1. Herança: É um tipo de relação de generalização. Uma classe herda características e comportamentos de outra. Apesar de existir uma relação estrutural entre as classes, elas são conceitos independentes no código.

  *2. Associações:

    *1. Associação Simples: Exemplo:
      - Um `Escritor` pode existir e funcionar sem uma `Ferramenta`, bem como a `Ferramenta` existe sem o `Escritor` e pode funcionar em outros contextos (relação mais fraca).

    *2. Agregação:
      - Enquanto na associação o uso de outro objeto é apenas pontual ou opcional, na agregação a classe principal perde quase todo o seu sentido prático se não tiver as partes agregadas

      - É um tipo de associação que representa uma relação de todo-parte , representando uma relação mais forte que associação simples, na qual os elementos possuem existência independente (um existe sem o outro), mas não funcionam adequadamente se não estiverem relacionados. O todo pode existir sem a parte, e a parte pode existir sem o todo. Apesar disso, eles possuem uma relação de pertencimento ou agrupamento.

      Exemplo:
        - Um carrinho de compras pode existir vazio, mas sua razão de ser e quase todas as suas operações básicas (inserir itens, calcular o total, verificar a quantidade) dependem diretamente da existência de produtos. Ele simplesmente não cumpre seu papel de forma adequada sem produtos agregados (ele existe sem os produtos, mas não funciona sem eles). Para funcionar corretamente, o Carrinho de Compras precisa agregar Produtos.
*/

//* CLASSE QUE AGREGA PRODUTOS (Todo)
export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = []; //

  // Método que recebe um ou vários produtos usando Rest Operator
  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((acc, produto) => acc + produto.preco, 0);
  }
}

//* CLASSE A SER AGREGADA (Parte)
export class Produto {
  constructor(public nome: string, public preco: number) { }
}

//* INSTANCIAÇÃO -> Criando instâncias independentes de Produtos
const produto1 = new Produto('Camisa', 49.9);
const produto2 = new Produto('Caneca', 1.9);
const produto3 = new Produto('Caneta', 0.9);

// Instanciando o Carrinho de Compras
const carrinhoDeCompras = new CarrinhoDeCompras();

// Agregando os produtos ao carrinho
carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3);

//* TESTES
console.log(carrinhoDeCompras);
console.log(carrinhoDeCompras.quantidadeProdutos());
console.log(carrinhoDeCompras.valorTotal());
