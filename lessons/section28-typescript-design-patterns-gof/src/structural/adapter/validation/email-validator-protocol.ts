/*
Módulo dedicado para definir o protocolo para validação de e-mail.

Basicamente, é uma interface dizendo: "Meu código precisa validar um e-mail. Não se sabe como, mas ela vai validar".
*/

// Contrato para validação de E-mail em classes
export interface EmailValidatorProtocol {
  isEmail: EmailValidatorFnProtocol;
}

// Tipagem para a função (aplicando o princípio DRY)
export type EmailValidatorFnProtocol = (value: string) => boolean;
