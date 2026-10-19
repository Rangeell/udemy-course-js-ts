/*
Nesta aula prática, aplicamos o padrão de projeto Observer utilizando TypeScript e elementos reais do DOM (Document Object Model) no navegador, criando um sistema reativo onde um campo de texto (input) notifica dinamicamente múltiplos elementos visuais (parágrafos e divs) sempre que seu conteúdo é alterado.

Para saber mais detalhes da implementação desse código, acessa as anotações do Obsidian.
*/

// FUNÇÕES FACTORY AUXILIARES PARA CRIAÇÃO DE ELEMENTOS DO DOM
function makeInput(): HTMLInputElement {
  const input = document.createElement('input');
  document.body.appendChild(input);
  return input;
}

function makeParagraph(): HTMLParagraphElement {
  const p = document.createElement('p');
  document.body.appendChild(p);
  p.innerText = 'Texto inicial (Hardcoded)';
  return p;
}

function makeDiv(): HTMLDivElement {
  const div = document.createElement('div');
  document.body.appendChild(div);
  div.innerText = 'Texto inicial da DIV (Hardcoded)';
  return div;
}

// INTERFACES DO PADRÃO OBSERVER (PROTOCOLOS)
interface Observer {
  update(observable: Observable): void;
}

interface Observable {
  subscribe(...observers: Observer[]): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

// OBSERVÁVEL CONCRETO (SUBJECT)
class InputObservable implements Observable {
  private observers: Observer[] = [];

  constructor(public element: HTMLInputElement) { }

  subscribe(...observers: Observer[]): void {
    observers.forEach(observer => {
      if (!this.observers.includes(observer)) {
        this.observers.push(observer);
      };
    });
  }

  unsubscribe(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);

    if (observerIndex !== -1) {
      this.observers.splice(observerIndex, 1);
    };
  }

  // Invoca o método update de cada observador e passa a própria instância do `InputObservable` como parâmetro
  notify(): void {
    this.observers.forEach(observer => observer.update(this));
  }
}

// OBSERVADORES CONCRETOS (OBSERVERS)
class ParagraphObserver implements Observer {
  constructor(public element: HTMLParagraphElement) { }

  update(observable: Observable): void {
    // Refinamento de tipo (Type Narrowing / Type Guard) garantindo Type Safety
    if (observable instanceof InputObservable) {
      // Garantido que a propriedade `element` existe dentro do objeto passado como argumeto
      this.element.innerText = observable.element.value;
    }
  }
}

class DivObserver implements Observer {
  constructor(public element: HTMLDivElement) { }

  update(observable: Observable): void {
    if (observable instanceof InputObservable) {
      this.element.innerText = observable.element.value;
    }
  }
}

// CLIENT CODE

// Instanciação do Sujeito Observável (Cria e encapsula o elemento <input>)
const input = new InputObservable(makeInput());

// Instanciação dos Observadores Concretos (Cria elementos <p> e <div> no DOM)
const p1 = new ParagraphObserver(makeParagraph());
const p2 = new ParagraphObserver(makeParagraph());
const div = new DivObserver(makeDiv());

// Inscrição dos observadores no sujeito
input.subscribe(p1, p2, div); // Recebem atualizações em tempo real, conforme os dados são atualizados no input!

input.element.addEventListener('keyup', () => {
  input.notify();
});

/*
Demonstração ativa de cancelamento de inscrição (Unsubscribe)

Ao cancelar a inscrição do segundo parágrafo (p2), ele deixa de receber atualizações
*/

input.unsubscribe(p2);
