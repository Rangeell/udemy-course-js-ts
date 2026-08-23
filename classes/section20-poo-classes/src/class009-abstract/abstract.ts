/*
CLASSES, MÉTODOS E ATRIBUTOS ESTÁTICOS

* CLASSES ABSTRATAS
  ? O que são classes abstratas?
    - São classes que não temos a pretensão de instanciar e que foram criadas unica e exclusivamente para servirem como molde / contrato para as suas subclasses seguirem
    - Não podem ser instanciada diretamente. Só pode ser instanciada através de suas subsclasses (classes concretas)

  ? Porque usamos classes abstratas?
  - Nós usamos classes abstratas para que tenhamos:
    1. Um tipo: todas as classes que extenderem a classe abstrata serão do mesmo tipo dela
    2. Garantimos que todas as classes que extenderem a classe abstrata tenham obrigatóriamente determinado método ou atributo

* MÉTODOS ABSTRATOS
  ? O que são métodos abstratos?
  - São métodos sem corpo que obrigam as subclasses a herdarem o mesmo

  ? Porque usamos métodos abstratos?
    1. Para que todas as subclasses obrigatoriamente o utilizem, evitando bugs inesperados

* ATRIBUTOS ABSTRATOS
  ? O que são atributos abstratos?
    - São atributos não inicializados (sem valor) presentes na superclasse que obriga todas as subclasses a herdarem o mesmo
*/

// Simulando um jogo RPG simples
export abstract class Personagem { //* CLASSE ABSTRATA
  protected abstract emoji: string; // Atributo abstrato não inicializado

  constructor( // shorthand construtctor
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) { }

  // Método concreto comum a todas as subclasses -> Passamos o personagem a ser atacado
  atacar(personagem: Personagem): void { // Personagem como tipo
    this.bordao();
    // Personagem atual perde vida com base na força de atk do personagem que atacou
    personagem.perderVida(this.ataque);
  }

  // Método concreto comum a todas as subclasses -> Subtrai vida do personagem atacado
  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.emoji} - ${this.nome} agora tem ${this.vida} de vida!`);
  }

  // Método abstrato (contrato) que todos os personagem obrigatoriamentedevem implementar de forma específica
  abstract bordao(): void
}

//* CLASSE CONCRETA 1
export class Guerreira extends Personagem {
  protected emoji: string = '\u{1F9DD}'; // Inicializando atributo abstrato obrigatório

  // Implementando método abstrato obrigatório
  bordao(): void {
    console.log(`${this.emoji} GUERREIRA AO ATAQUEEEE!`);
  }
}

//* CLASSE CONCRETA 2
export class Monstro extends Personagem {
  protected emoji: string = '\u{1F9DF}'; // Inicializando atributo abstrato obrigatórip

  // Implementando método abstrato obrigatório
  bordao(): void {
    console.log(`${this.emoji} MONNNNNSSSTERRR!`);
  }
}

/*
! const personagem = new Personagem(); ERRO!
Classes abstratas não podem ser instanciadas diretamente
*/

// Instanciando classes concretas
const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

// Executando métodos concretos
guerreira.atacar(monstro);
monstro.atacar(guerreira);
