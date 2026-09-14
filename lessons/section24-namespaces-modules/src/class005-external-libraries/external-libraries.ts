/*
- Nesta aula, aprendemos como utilizar bibliotecas de terceiros (pacotes do npm) em projetos com TypeScript, compreendendo a importância das definições de tipos para o auto-complete e validação do compilador.

Para que o compilador TypeScript entenda essas bibliotecas, utilizamos o repositório DefinitelyTyped (o ecossistema `@types`). Gerenciar essas definições corretamente é essencial para manter o projeto seguro, performático e com ferramentas de auxílio ao desenvolvedor ativas.
*/

import validator from 'validator'; //! Sem @types/validator daria erro. Além disso, perderíamos o autocomplete
import _ from 'lodash'; //! Sem @types/lodash daria erro. Além disso, perderíamos o autocomplete

console.log(validator.isEmail('breno@email.com'));
console.log(_.cloneDeep([1, 2, 3, 4, 5, 6 ]));
