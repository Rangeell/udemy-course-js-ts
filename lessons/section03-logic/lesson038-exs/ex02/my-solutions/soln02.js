/* 
Escreva uma função chamada ePaisagem que recebe dois argumentos:
    - Largura
    -  Altura
Retorne true se a image, estive no modo paisagem
*/

const ePaisagem = (width, height) => width > height ? true : false
console.log(ePaisagem(500, 300))