//* THIS AS TYPE
export class Calculator {
  constructor(public number: number) { }

  add(n: number): this { // this como tipo
    this.number += n;
    return this; // Retornando a própria instância -> permite Method Chaning
  }

  sub(n: number): this {
    this.number -= n;
    return this;
  }

  divide(n: number): this {
    this.number /= n;
    return this;
  }

  multiply(n: number): this {
    this.number *= n;
    return this;
  }
}

export class SubCalculator extends Calculator {
  power(n: number): this {
    this.number **= n;
    return this;
  }
}

// Instanciação
const calc = new Calculator(10);
const subcalc = new SubCalculator(10);

// Method Chaning
calc.add(5).multiply(2).divide(2).sub(5); // Method Chaning -> Só é possível porque retornamos o `this`
subcalc.add(5).multiply(2).divide(2).sub(5).power(2);

// Testes
console.log(calc);
console.log(subcalc);

//* DESING PATTERN -> BUILDER (GoF)
export class RequestBuilder { // Simulando uma requisão para um servidor
  // Inicialização das propriedades como nulas
  private method: 'get' | 'post' | null = null; // Setamos um valor padrão
  private url: string | null = null;

  // Configura o método HTTP da requisição
  tMethod(method: 'get' | 'post'): this { // o tipo de "method" é um subtipo do "method" do construtor
    this.method = method;
    return this;
  }

  // Configura a URL de destino da requisiçã
  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  // Método finalizador que executa a ação real
  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const request = new RequestBuilder();
request.setUrl('http://www.google.com').tMethod('post').send();
