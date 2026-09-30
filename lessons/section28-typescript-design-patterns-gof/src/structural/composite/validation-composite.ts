/*
Diferente do exemplo anterior voltado a dados, neste módulo aplicamos o Composite para compor comportamentos lógicos. Isso permite estender as regras de negócio do sistema via Open/Closed Principle (OCP): novas regras são criadas como novas classes, sem tocar na lógica de validação existente.

OBS: As validações são simples apenas para fins didáticos.
*/

// Contrato que a lief e composite vão implementar (Classe Component)
export abstract class ValidationComponent {
  abstract validate(value: unknown): boolean;
}

// Realiza o trabalho real (Classe lief (folha))
export class ValidateEmail extends ValidationComponent {
  validate(value: unknown): boolean {
    // Type guard
    if (typeof value !== 'string') return false;

    // Regex simples apenas para fins didáticos
    return /@/.test(value);
  }
}

// Realiza o trabalho real (Classe lief (folha))
export class ValidateString extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === 'string';
  }
}

// Realiza o trabalho real (Classe lief (folha))
export class ValidateNumber extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;

    return /\d/.test(value);
  }
}

// Mantém coleção de filhos e delega ações solicitadas para eles (Classe Composite)
export class ValidationComposite extends ValidationComponent {
  private readonly children: ValidationComponent[] = [];

  validate(value: unknown): boolean {
    for (const child of this.children) {
      const validation = child.validate(value);
      if (!validation) return false;
    }

    return true;
  }

  add(...validations: ValidationComponent[]): void {
    validations.forEach(validation => this.children.push(validation));
  }
}

// Cliente Code
const validateEmail = new ValidateEmail();
const validateNumber = new ValidateNumber();
const validateString = new ValidateString();
const validationComposite = new ValidationComposite();

validationComposite.add(validateEmail);

console.log(validationComposite.validate('breno@email.com')); // True
console.log(validationComposite.validate('brenoemail.com')); // False

validationComposite.add(validateNumber, validateString);

console.log(validationComposite.validate(10)); // False
console.log(validationComposite.validate('1223@')); // True
console.log(validationComposite.validate('breno1223@email.com')); // True
