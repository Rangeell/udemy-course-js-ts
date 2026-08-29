// Espelhando tipos

type Veiculo = {
  marca: string;
  ano: number;
}

type Car = { // Tipo que espelha o typo Veiculo
  brand: Veiculo['marca']; // Acessando as chaves do tipo dinamicamente -> Evita acoplamento rídido
  year: Veiculo['ano']; // Acessando as chaves do tipo dinamicamente -> Evita acoplamento rídido
  name: string;
}

// Qualquer alteração no tipo "Veiculo" refletirá no tipo "Car" e, consequentemente, no Objeto "carro".

const carro: Car = {
  brand: 'Ford',
  year: 2020,
  name: 'Nome',
};

console.log(carro);
