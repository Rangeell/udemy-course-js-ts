/*
*Relações:
  1. Herança (Relação: "É um" / "Is a")
  2. Associação (Relação: "Tem um" / "Has a")

*Associações:
  - É o tipo de relação mais fraca que existe entre objetos
  - Podemos ligar um objeto a outro objeto, fazendo com que nenhum dos objetos dependam um do outro
*/

//* CLASSE CONCRETA 1 (ESCRITOR)
export class Escritor {
  // Uso de Underscore para getter e setter
  private _ferramenta: Ferramenta | null = null; // Ferramenta pode existir ou não

  constructor(
    private readonly _nome: string, // Uso de Underscore para getter e setter
  ) { }

  get nome(): string { // Getter
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta; // Setter
  }

  get ferramenta(): Ferramenta | null { // Getter
    return this._ferramenta;
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log('Não posso escrever sem ferramenta');
      return;
    }
    if (this.ferramenta) this.ferramenta.escrever();
  }
}

//* CLASSE ABSTRATA -> CONTRATO / MOLDE
export abstract class Ferramenta {
  constructor(private _nome: string) { }

  abstract escrever(): void // Método abstrato -> obrigatório nas subclasses

  get nome(): string { // Getter
    return this._nome;
  }
}

//* CLASSE CONCRETA 2 (FERRAMENTA)
export class Caneta extends Ferramenta {

  escrever(): void {
    console.log(`${this.nome} está escrevendo...`);
  }
}

//* CLASSE CONCRETA 3 (FERRAMENTA)
export class MaquinaEscrever extends Ferramenta {

  escrever(): void {
    console.log(`${this.nome} está digitando...`); // Polimorfismo
  }
}

const escritor = new Escritor('Breno');
const caneta = new Caneta('Bic');
const maquinaEscrever = new MaquinaEscrever('Uma máquina');

// _Todos as classes existem de forma independente
console.log(escritor.nome);
console.log(caneta.nome);
console.log(maquinaEscrever.nome);

// O escritor não escreve sem uma ferramenta, mas também não quebra (não deixa de existir / funcionar)
escritor.escrever(); // Método funciona corretamente sem depender de uma ferramenta

//* ASSOCIAÇÕES
escritor.ferramenta = caneta; // Usando setter para setar uma ferramenta
escritor.escrever(); // Agora o escritor usa a caneta!

escritor.ferramenta = maquinaEscrever; // Setando outra ferramenta
escritor.escrever();

escritor.ferramenta = null; // Também aceita `null`
escritor.escrever(); // Volta ao funcionamento padrão
