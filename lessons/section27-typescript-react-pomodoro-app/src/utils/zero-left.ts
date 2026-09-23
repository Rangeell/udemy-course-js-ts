// Função que arredonda e adiona o 0 à esquerda
const zeroLef = (n: number) => Math.floor(n).toString().padStart(2, '0');
export default zeroLef;
