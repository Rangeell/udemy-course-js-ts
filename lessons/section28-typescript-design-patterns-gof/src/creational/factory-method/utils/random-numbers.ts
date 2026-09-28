/*
Utilidade de Simulação (Isolada da lógica do padrão)
*/

export function randomNumbers(lenght: number): number {
  return Math.floor(Math.random() * lenght);
}
