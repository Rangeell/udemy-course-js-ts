export class Peaple<T, U> {
  constructor(public name: T, public age: U) { }
}

//? const pleaple01 = new Peaple('Breno', 23); // Inferência automatica
//? const pleaple02 = new Peaple(['Breno'], 23); // Inferência automatica
//? const pleaple03 = new Peaple(['Breno'], { age: 23 }); // Inferência automatica

/*
Lógica da estrutura de pilha:
  * LIFO (Last in, First Out):
    -  O último elemento a entrar na estrutura de pilha (no topo) é, obrigatoriamente, o primeiro a ser removido da mesma. A integridade da ordem de processamento é garantida pela restrição de acesso: não se manipula a base ou o meio, apenas o topo (algo semelhante a uma "pilha de livros").
*/

// Implementando uma stack data structure

export class Stack<T> { // Generic usado logo após o nome da classe (possibilida acessá-lo ao longo de toda a classe)
  // Não vamos ter construtor, pois não queremos passar valores para a instância

  private counter = 0; // Simulando um index
  private elements: { [k: number]: T } = {}; //* Tipagem com index signature -> a chave do tipo number e o valor do objeto é do um tipo T que recebermos dinamicamente

  // A estrura de dados de pilha funciona semelhante a um array: Possui métodos para adicionar e remover dados no fim da estrutura (push e pop respectivamente)

  // Adiciona um novo elemento no topo da estrutura usando o index / ponteiro atual
  push(element: T): void {
    this.elements[this.counter] = element;
    this.counter++; // Atualiza o index / ponteiro para a próxima adição
  }

  // Remove e retorna o elemento do topo seguindo a ordem LIFO
  pop(): T | undefined { // Métodos pop geralmente retornam o elemento removido
    if (this.isEmpity()) return undefined;

    this.counter--; // Decrementa o index / ponteiro para o elemento atual do topo

    const element = this.elements[this.counter]; // Seleciona o elemento atual a ser removido
    delete this.elements[this.counter]; // Deleta o elemento atual da pilha (libera a referência no objeto)
    return element; // Retorna o elemento para quem o removeu
  }

  // Método que checa se a pilha atual está vazia
  isEmpity(): boolean { return this.counter === 0; }

  // Método que mostra o tamanho atual da pilha
  length(): number { return this.counter; }

  // Método que mostra a pilha atual
  showStack(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }
}

//! const stack = new Stack(); -> TypeScript não consegue inferir os tipos dos dados -> passa a ser unknown

// Instanciação com generics (passando argumentos) e union types -> podemos receber apenas stirngs e numbers
const stack = new Stack<string | number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push('string');
stack.showStack();

// Eliminando todos os elementos da pilha
while (!stack.isEmpity()) { // Enquanto a pilha não estiver vazia
  console.log(stack.pop());
}
