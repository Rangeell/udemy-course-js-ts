/*
No ecossistema TypeScript moderno, muitas vezes a verbosidade de uma classe para um único método é desnecessária. O professor demonstra como simplificar o Adapter usando uma abordagem funcional, que em JS/TS se comporta essencialmente como um Singleton de lógica.

Se precisarmos alterar a lib, alteramos só essa parte do código, e não o sistema todo.

Aqui, exportamos uma constante que cumpre o protocolo funcional definido anteriormente.
*/

import isEmail from 'validator/lib/isEmail';
import type { EmailValidatorFnProtocol } from './email-validator-protocol';

// A função delega a responsabilidade para a biblioteca externa
export const EmailValidatorFnAdapter: EmailValidatorFnProtocol = (email: string): boolean => {
  return isEmail(email); // Se precisar, alteraramos apenas esse ponto
};
