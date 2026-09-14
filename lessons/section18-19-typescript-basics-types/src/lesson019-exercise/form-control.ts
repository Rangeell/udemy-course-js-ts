import { isEmail } from 'validator';

// Classes
const SHOW_ERROR_MESSAGES = 'show-error-message'; // Classe CSS que exibe o erro

// DOM Elements
const form = document.querySelector('form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

// Evento de envio do formulário
form.addEventListener('submit', function (e: Event): void {
  e.preventDefault();

  // 1. Limpa erros anteriores
  clearErrors(this); // this aponta para quem chamou o evento -> form

  // 2. Executa as validações
  checkEmpityField(username, email, password, password2);
  checkEqualPasswords(password, password2);
  checkEmail(email);

  // 3. Verifica se pode enviar
  return shouldSendForm(this) ? console.log('Formulário enviado com sucesso!') : console.log('Não enviado');
  ;
});

// Remove a classe de erro de todos os campos
const clearErrors = (form: HTMLFormElement): void => {
  const formField = form.querySelectorAll('.form-fields');
  formField.forEach(field => field.classList.remove(SHOW_ERROR_MESSAGES));
};

// Exibe a mensagem de erro em um campo específico
const showError = (input: HTMLInputElement, msg: string): void => {
  const formField = input.parentElement as HTMLDivElement;
  const errorMessage = input.nextElementSibling as HTMLSpanElement;

  errorMessage.innerText = msg;
  formField?.classList.add(SHOW_ERROR_MESSAGES);
};

// Valida campos vazios
const checkEmpityField = (...inputs: HTMLInputElement[]): void => {
  inputs.forEach(input => {
    if (input.value.trim() === '') {
      return showError(input, `O campo "${input.parentElement?.innerText}" não pode estar vazio!`);
    };
  });
};

// Valida o e-mail usando o validator
const checkEmail = (input: HTMLInputElement): void => {
  if (!isEmail(input.value.trim())) {
    showError(input, 'E-mail inválido');
  }
};

// Compara se as duas senhas são iguais
const checkEqualPasswords = (password: HTMLInputElement, password2: HTMLInputElement): void => {
  if (password.value !== password2.value) {
    showError(password, 'As senhas não batem!');
    showError(password2, 'As senhas não batem!');
  }
};

// Checa se existe algum erro pendente no formulário
const shouldSendForm = (form: HTMLFormElement): boolean => {
  let canSend = true;
  const errors = form.querySelectorAll(`.${SHOW_ERROR_MESSAGES}`);

  if (errors.length > 0) canSend = false;

  return canSend;
};
