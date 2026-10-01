/*
Nesta aula prática, aplicamos o padrão Adapter para isolar uma biblioteca externa de validação (`validator`) das regras de negócio do nosso código, utilizando duas abordagens: a clássica baseada em classe e uma funcional simplificada.

No desenvolvimento de sistemas escaláveis, a gestão de dependências externas é uma das tarefas mais críticas de um Arquiteto de Software. É extremamente comum recorrermos a bibliotecas de terceiros para acelerar a entrega, mas o erro fatal em projetos de longo prazo é permitir que o núcleo da aplicação se torne "refém" dessas dependências.

A essência do Adapter nesta aula é a aplicação da Inversão de Dependência (DIP). Em vez de sua aplicação se moldar à biblioteca externa, nós definimos o contrato que a biblioteca deve cumprir para servir ao nosso domínio.

- Definição do Target (Protocolo): Criamos nossa própria interface de validação. O sistema passa a depender de uma abstração controlada por nós.
  - O Papel do Adapter: Ele atua como um tradutor técnico. Ele recebe as requisições da nossa aplicação no formato que definimos e as "adapta" para a assinatura específica da biblioteca `validator`.
  - Benefícios Arquiteturais: Isso garante que possamos "jogar fora" uma biblioteca e plugar outra sem que o código cliente sofra qualquer impacto.
*/

import type { EmailValidatorFnProtocol, EmailValidatorProtocol } from './validation/email-validator-protocol';
import { EmailValidatorClassAdapter } from './validation/email-validator-function-adapter';
import { EmailValidatorFnAdapter } from './validation/email-validator-class-adapter';

// Exemplo com Classe: O cliente recebe a abstração via Injeção de Dependência
function validateEmailClass(emailValidator: EmailValidatorProtocol, email: string) {
  if (emailValidator.isEmail(email)) { // Acessa método da classe passada
    console.log('E-mail válido (CLASS).');
  } else {
    console.log('E-mail inválido (CLASS).');
  }
}

// Exemplo com Função: Injeção de dependência funcional
function validateEmailFn(emailValidator: EmailValidatorFnProtocol, email: string) {
  if (emailValidator(email)) { // Usando a função que delega pra lib externa
    console.log('E-mail válido (FN).');
  } else {
    console.log('E-mail inválido (FN).');
  }
}

// Execução: Note que o cliente não conhece o 'validator' original
const email = 'breno@email.com';

validateEmailClass(new EmailValidatorClassAdapter, email);
validateEmailFn(EmailValidatorFnAdapter, email);
