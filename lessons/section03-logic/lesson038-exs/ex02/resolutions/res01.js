/* 
Escreva uma função chamada ePaisagem que recebe dois argumentos:
    - Largura
    -  Altura
Retorne true se a image, estive no modo paisagem
*/

function ePaisagem(largura, altura) {
    return largura > altura ? true : false
}

console.log(ePaisagem(1080, 1920))
