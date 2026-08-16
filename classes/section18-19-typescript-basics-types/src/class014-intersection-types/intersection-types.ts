/*
-  Union Types -> | = "OU"
- Intersection Types -> & = "E" -> Intersecção entre dois conjuntos
*/

//* Segregação de tipos - tipos enxutos e reutilizáveis
type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome | TemSobrenome | TemIdade; // Com Union Types criamos um tipo/objeto mais "relaxado"
type Pessoa2 = TemNome & TemSobrenome & TemIdade; // Com Intersection Types -> Obriga o objeto a ter todas essas propriedades

//* Intersecção de Conjuntos
type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';

// A intersecção entre ('A' | 'B') e ('A' | 'C') é apenas o tipo literal 'A'
type Intersection = AB & AC & AD;
// Tipo inferido: 'A'

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Luiz',
};

const pessoa2: Pessoa2 = {
  nome: 'Breno',
  sobrenome: 'Rangel',
  idade: 30,
};

console.log(pessoa);
console.log(pessoa2);
