/*
- Tudo que for criado nesse arquivo precisa ser criado de maneira global, para que o TypeScript tenha acesso a esse arquivo dentro do sistema todo

- O nosso objetivo é entrar na tipagem do Lodash e do Objeto global do NodeJS e configurar alguma coisa

- 'export {}' é obrigatório: transforma o arquivo em um módulo. Sem isso, o TypeScript trata o .d.ts como script global e o bloco 'declare global' abaixo é ignorado silenciosamente.
*/

export { }; // Torna o arquivo um módulo — necessário para 'declare global' funcionar

declare global {
  namespace _ { // Usamos "_", pois é o alias do Lodash
    // Declaramos a interface exatamente igual ao do Lodash, para que ocorra o Declaration Merging
    interface LoDashStatic {
      mult(array: number[]): number // Contrato para a nossa função -> atribuição no Type Space
    }
  }

  var MyGlobal: string; // Contrato -> A atribuição no Type Space
}
