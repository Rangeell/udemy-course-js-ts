export function secondsToTime(seconds: number): string {
  // Função que divide e adiona o 0 à esquerda
  const zeroLef = (n: number) => Math.floor(n).toString().padStart(2, '0');

  const min = zeroLef((seconds / 60) % 60); // resto da divisão port 60 da conta "seconds/60"
  const sec = zeroLef(seconds % 60); // resto da divisão por 60

  return `${min}:${sec}`;
}
