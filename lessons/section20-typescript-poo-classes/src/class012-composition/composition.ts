/*
Resumo das relações:
  - Associações;

    *1. Associação Simples:
      - Relação mais "fraca" entre os objetos -> Um objeto usa outro em determinado momento do código. Ambos são independentes e funcionais sozinhos.

    *2. Agregação:
      - Uma relação mais forte que a anterior, onde um objeto precisa de outro objeto para funcionar adequadamente, mas amabos existem de forma independentes.
      - Injetamos a classe de fora para dentro
      - As duas classes podem ser usadas para outras coisas fora do código

      ?- Exemplo:
        - Carro (todo) e suas rodas (parte).

    *3. Composição:
      - A relação mais forte dos 3. Um objeto tem outro objeto como parte dele mesmo, ou seja, um não existe sem o outro (relação muito mais acoplada).
      - A instanciação ocorre dentro da classe, ou seja, criamos uma classe dentro da outra. Portanto, nesse caso, não temos como usar a classe que foi instanciada internamente do lado de fora

      ?- Exemplos:
        - Carro (todo) e seu motor (parte);
        - Ser humano (todo) e seu coração (parte).
*/

//* TODO: CLASSE CARRO
export class Carro {
  // Composição: A instância de Motor é criada internamente pela própria classe Carro
  private readonly motor = new Motor();

  // Métodos de delegação para manter a Lei de Demeter / Law of Demeter (oculta o motor de fora)
  ligar(): void {
    this.motor.ligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  parar(): void {
    this.motor.parar();
  }

  desligar() {
    this.motor.desligar();
  }
}

//* PARTE: CLASSE MOTOR
export class Motor {

  ligar(): void {
    console.log('Motor está ligado...');
  }

  acelerar(): void {
    console.log('Motor está acelerando...');
  }

  parar(): void {
    console.log('Motor está parando...');
  }

  desligar(): void {
    console.log('Motor está desligando...');
  }
}

//* INSTANCIAÇÃO
const carro = new Carro();

/*
!Má prática de programação (expondo engrenagens internas).
Se o atributo `motor` fosse público, poderíamos fazer chamadas encadeadas no escopo global como:

carro.motor.acelerar();

Essa é uma má prática de pogramação, frequentemente associada ao antipadrã "trem de carga" (ou acidente de trem)

! Viola o encapsulamento ao expor as engrenagens internas de um objeto para o mundo externo.

* A solução para o problema acima, é o que chamamos de delegação de ações

O correto é "mandar o objeto fazer" em vez de pegar suas propriedades e fazer manualmente. Para isso, criamos métodos na classe `Carro` com o mesmo nome e repassamos (delegamos) a chamada para o motor interno.
*/

// Chamadas diretas ao carro sem expor o motor (Law of Demeter)
carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();
