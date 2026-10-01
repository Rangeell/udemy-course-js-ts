/*
Se precisarmos alterar a lib, alteramos só essa parte do código, e não o sistema todo.

Abaixo, é demonstrada a implementação que encapsula o `validator`.
*/

import isEmail from 'validator/lib/isEmail';
import type { EmailValidatorProtocol } from './email-validator-protocol';

export class EmailValidatorClassAdapter implements EmailValidatorProtocol {
  // A classe delega a responsabilidade para a biblioteca externa
  isEmail(value: string): boolean {
    return isEmail(value); // Se precisar, alteraramos apenas esse ponto
  };
}
