// Função que arredonda e adiciona o 0 à esquerda
const zeroLef = (n: number) => Math.floor(n).toString().padStart(2, '0');
export default zeroLef;
