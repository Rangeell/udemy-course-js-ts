/*
Notes
    Com replace, podemos acessar os grupos com o 1$, 2$ <- Retrovisores
    Ou seja, retrovisores são como variáveis dentro das RegExps. Para cada grupo, temos um retrovisor que podemo utilizar

    Uso externo(.replace): 1$ - 2$ - 3$
    Uso interno (dentro da própria RegExp): \1 - \2 - \3
*/

const { html2 } = require('../base.js');
console.log(html2);

/*
- Com o \1 -> fazemos com que seja encontrado a mesma coisa que foi encotrada no primeiro grupo

- Usamos "[\s\S]" para selecionar tudo, inclusive quebras de linhas -> DotAll "gambiarrado"

- Ao inserirmos "([\s\S])" como um grupo, gravamos na memória que isso é um grupo, logo, podemos selecionar ele com o método de string .replace()

Retrovisores:
    Tag: <p>Olá munod</p>

    1. Grupo 1: (\w+) -> Representa apenas a tag "p" -> p
    2. Grupo 2: ([\s\S]*?) -> Representa o conteúdo dentro da tag -> "Olá mundo"

Logo, os nossos retrovisores são: p e Olá mundo.
*/
console.log(html2.match(/<(\w+)[\s\S]*?>([\s\S]*?)<\/\1>/gi))

// Podemos observar os respectivos grupos, porém, com esses retrovisores, não conseguiríamos remontar as tags para substituir o seu conteúdo
// Veja o próximo arquivo para continuação
console.log(html2.replace(/<(\w+)[\s\S]*?>([\s\S]*?)<\/\1>/gi, '$1 $2'))