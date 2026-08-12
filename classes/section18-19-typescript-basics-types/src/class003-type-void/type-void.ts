/*
Tipo void indica que uma função ou método retornam nada ou undefined
*/

// Função
function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

// Método de Objeto
const Pessoa = {
  nome: 'Breno',
  sobrenome: 'Rangel',

  exibirNome(): void {
    console.log(`${this.nome} ${this.sobrenome}`);
  },
};

noReturn('Luiz', 'Otávio', 'Breno', 'Rangel');
Pessoa.exibirNome();
