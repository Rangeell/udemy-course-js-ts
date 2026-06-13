/* 
Escreva uma função chamada ePaisagem que recebe dois argumentos:
    - Largura
    -  Altura
Retorne true se a image, estive no modo paisagem
*/

function ePaisagem(width, height) {
    return width > height ? true : false
}

console.log(ePaisagem(500, 300))
