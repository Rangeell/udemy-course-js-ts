/*
*Overload:
  ?O que é
    -> Baseado na assinatura da função e nos parâmetros que essa função receber, vamos fazer com que ela se comporte de maneiras diferentes.

  No TypeScript, ao contrário de outras linguagens, só temos o overload no compo do tipo (nunca no compo do valor). Para funcionar adequadamente, precisamos usar Type Guards.
*/

// Supanha que temos uma função que faça soma

type Adder = { // 3 tipos de assinaturas diferentes para uma mesma função
  (x: number): number; // Recebe apenas 1 número
  (x: number, y: number): number; // Recebe 2 números
  (...args: number[]): number; // Recebe vários números (um array)
}

const adder: Adder = (x: number, y?: number, ...args: number[]): number => {
  // Para saber como fazer essa soma, precisamos de Type Guards / Type Narrowing

  // Nessa chegagem, assumimos que todos os argumentos existem
  // Reduzimos o array somando tudo e adicionando x e y (garantindo valores padrão caso faltem)
  if (args.length > 0) return args.reduce((acc, v) => acc + v, 0) + x + (y || 0);

  // Se não há args adicionais, lidamos com os casos de apenas X ou X + Y
  // Usamos curto-circuito (|| 0) pois o Y pode vir como undefined (na assinatura de 1 parâmetro)
  //* Podíamos simplesmente ter setado o valor padrão como 0 diretamente nos parâmetros da função também
  return x + (y || 0);
};

console.log(adder(1));
console.log(adder(1, 2));
console.log(adder(1, 2, 3));
console.log(adder(1, 2, 3, 4));
