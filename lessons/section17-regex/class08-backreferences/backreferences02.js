/*
Para conseguirmos remontar as tags com o replace e, posteriormente, substituí-las, precisamos criar outros grupos

Grupos:
    1. Grupo 1: (<(\w+)([\s\S]*?)>) -> Representa a abertura da tag p completa -> <p class="texto">
    
    2. Grupo 2: (\w+ ) -> Representa apenas a tag "p" -> p

    3. Grupo 3: ([\s\S]*?) -> Representa os atributos da tag (classes e outros dados)
        - Não vamos precisar dele para o replace, pois o grupo já engloba tudo que precisamos
    
    3. Grupo 4: ([\s\S]*?) -> Representa o conteúdo dentro da tag -> "Olá mundo" 

    4. Grupo 5: (<\/\2>) -> Representa o fechamento da tag

Com os retrovisores $1, $4 e $5 conseguimos remontar a tag html completamente

GRUPOS DE NÃO CAPTURA:
    Como, nesse caso, não vamos precisar utilizar o retrovisor do grupo 3, podemos impedir que ele seja gravado na memória, ou seja, ele não será contabilizado como um grupo para os retrovisores

    Para isso, basta inserirmo um "?:" no início ddo grupo

    Com o grupo 3 sendo desconsiderado, temos uma nova organização dos grupos:
    
    Grupos:
        1. Grupo 1: (<(\w+)([\s\S]*?)>) -> Representa a abertura da tag p completa -> <p class="texto">
        
        2. Grupo 2: (\w+) -> Representa apenas a tag "p" -> p

        3. Grupo 4: ([\s\S]*?) -> Representa o conteúdo dentro da tag -> "Olá mundo" 

        4. Grupo 5: (<\/\2>) -> Representa o fechamento da tag

Com os retrovisores $1, $3 e $4 conseguimos remontar a tag html completamente para ser substituída
*/

const { html2 } = require('../base.js');
// console.log(html2);

// Inserindo conteúdo antes e depois do conteúdo dentro da tag
console.log(html2.replace(/(<(\w+)(?:[\s\S]*?)>)([\s\S]*?)(<\/\2>)/gi, '$1kkkk $3 kkkkk $4'))