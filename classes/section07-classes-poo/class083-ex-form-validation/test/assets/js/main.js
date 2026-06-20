/*
705.484.450-52
070.987.720-03

  7   0   0   4   4   4   8   8   8  (9 primeiros dígitos)
  x   x   x   x   x   x   x   x   x
 10   9   8   7   6   5   4   3   2  (Contagem regressiva de 10 a 2)
───────────────────────────────────
 70 + 0 + 0 +28 +24 +20 +32 +24 +16  =  234 (Soma total)

  7   0   0   4   4   4   8   8   8  digito1    (10 primeiros dígitos)
  x   x   x   x   x   x   x   x   x     x
 11  10   9   8   7   6   5   4   3     2       (Contagem regressiva de 11 a 2)
────────────────────────────────────────────
 77 + 0 + 0 +32 +28 +24 +45 +32 +24     =       (Soma total)


 Descobrir o digito
 Cálculo: 11 - (234 % 11)  ──►  11 - 3  =  8
 Como o resultado é 8 (menor ou igual a 9), o primeiro dígito calculado é 8.
*/

(function myScope() {

        //* VALIDATE CPF OBJECT
    class ValidateCpf {
        constructor(cpfInserted) {
            Object.defineProperty(this, 'cpf', {
                enumerable: false,
                configurable: false,
                get: () => cpfInserted,
            })
        }

        isValid() {
            if (!this.cpf) return false
            if (this.cpf.length !== 11) return false
            if (this.isSequence()) return false

            const trueCpf = this.getTrueCpf()
            return trueCpf === this.cpf
        }

        isSequence() {
            return this.cpf[0].repeat(11) === this.cpf
        }

        getTrueCpf() {
            const halfCpf = this.cpf.slice(0, -2)
            const digit1 = this.getDigit(halfCpf)
            const digit2 = this.getDigit(halfCpf + digit1)
            const trueCpf = halfCpf + digit1 + digit2

            return trueCpf
        }

        getDigit(halfCpf) {
            const cpfArray = Array.from(halfCpf)

            let regress = cpfArray.length + 1
            const total = cpfArray.reduce((acc, v) => {
                acc += Number(v) * regress
                regress--
                return acc
            }, 0)

            const digit = 11 - (total % 11)
            return digit >= 10 ? '0' : String(digit)
        }
    }

    //* FORM OBJECT 
    class Form {
        constructor() {
            this.inputName = document.querySelector('#name')
            this.nameArea = document.querySelector('.name-area')

            this.inputSurname = document.querySelector('#surname')
            this.surnameArea = document.querySelector('.surname-area')

            this.inputCpf = document.querySelector('#cpf')
            this.cpfArea = document.querySelector('.cpf-area')

            this.inputUsername = document.querySelector('#username')
            this.usernameArea = document.querySelector('.username-area')

            this.inputPassword = document.querySelector('#password')
            this.passwordArea = document.querySelector('.password-area')

            this.inputRePassword = document.querySelector('#repeat-password')
            this.rePasswordArea = document.querySelector('.repeat-password-area')

            Object.defineProperty(this, 'cleanCpf', {
                enumerable: false,
                configurable: false,
                get: () => this.inputCpf.value.replace(/\D+/g, '')
            })
        }

        start() {
            this.actions()
            this.inputName.focus()
        }

        actions() {
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault() // Impede envio do formulário com o enter

                    const inputInFocus = e.target

                    if (inputInFocus === this.inputName) {
                        if (this.validateName()) this.inputSurname.focus()
                    }

                    if (inputInFocus === this.inputSurname) {
                        if (this.validateSurname()) this.inputCpf.focus()
                    }

                    if (inputInFocus === this.inputCpf) {
                        if (this.ValidateCpf()) this.inputUsername.focus()
                    }
                    if (inputInFocus === this.inputUsername) {
                        if (this.validateUsername()) this.inputPassword.focus()
                    }

                    if (inputInFocus === this.inputPassword) {
                        if (this.validatePassword()) this.inputRePassword.focus()
                    }
                    if (inputInFocus === this.inputRePassword) this.validateRePassword()
                }
            })

            document.addEventListener('click', (e) => {
                const el = e.target

                if (el.tagName === 'BUTTON') {
                    e.preventDefault() // Impede envio o formulário
                    this.validateName()
                    this.validateSurname()
                    this.ValidateCpf()
                    this.validateUsername()
                    this.validatePassword()
                    this.validateRePassword()
                }
            })
        }

        validateName() {
            return Form.checkRequiredField(this.inputName, this.nameArea, "Nome") // Return true or false
        }

        validateSurname() {
            return Form.checkRequiredField(this.inputSurname, this.surnameArea, "Sobrenome") // Return true or false
        }

        ValidateCpf() { // Return true or false
            const validCpf = new ValidateCpf(this.cleanCpf)

            if (!Form.checkRequiredField(this.inputCpf, this.cpfArea, 'CPF')) return false
            if (!validCpf.isValid()) {
                Form.invalidText('CPF inserido inválido!', this.cpfArea)
                return false
            }
            return true
        }

        validateUsername() {
            Form.removeP(this.usernameArea)

            if (!Form.checkRequiredField(this.inputUsername, this.usernameArea, "Usuário")) return false
            // Só checa o comprimento se a função acima retornar false
            if (!this.checkLengthField(this.inputUsername, this.usernameArea)) return false

            return true
        }

        validatePassword() {
            Form.removeP(this.passwordArea)
            if (!Form.checkRequiredField(this.inputPassword, this.passwordArea, "Senha")) return false
            if (!this.checkLengthField(this.inputPassword, this.passwordArea)) return false // Só checa o comprimento se a função acima retornar false

            return true
        }

        validateRePassword() {
            Form.removeP(this.rePasswordArea)

            if (!Form.checkRequiredField(this.inputRePassword, this.rePasswordArea, "Repetir senha")) return false
            if (!this.checkLengthField(this.inputRePassword, this.rePasswordArea)) return false

            return true
        }

        //* Valida se um campo está vazio - Retorna true (válido) ou false (inválido)
        static checkRequiredField(inputName, nameArea, fieldName) {
            const text = inputName.value
            Form.removeP(nameArea)

            //TODO:  input.focus() -> add focus in first input que deu error.
            if (text === '') {
                Form.invalidText(`O campo "${fieldName}" não pode estar vazio!`, nameArea)
                // inputName.focus()
                return false // Retorna false (inválido) se o campo estiver vazio
            }
            return true // true se for válido
        }

        //* Valida números de caracteres - retorna true (válido) ou false (inválido)
        checkLengthField(inputName, nameArea) {
            const text = inputName.value

            if (inputName === this.inputUsername) {
                if (text.length < 3 || text.length > 12) {
                    Form.invalidText('Usuário inválido!', nameArea)
                    return false
                }
            }

            if (inputName === this.inputPassword) {
                if (text.length < 6 || text.length > 12) {
                    Form.invalidText('A senha deve ter entre 6 e 12 caracteres!', nameArea)
                    return false
                }
            }

            // TODO: adicionar texto de senhas não coincidentes no inputPassword também
            if (inputName === this.inputRePassword) {
                if (text !== this.inputPassword.value) {
                    Form.invalidText(`O campo "Senha" e "Repetir senha" devem ser iguais!`, nameArea)
                    return false
                }
            }
            return true
        }

        //* Remove parágrafos de erros, caso existam (reset)
        static removeP(nameArea) {
            const removeP = nameArea.querySelector('p')

            if (removeP) removeP.remove()
        }

        //* Insere texto de erro
        static invalidText(text, nameArea) {
            const p = Form.newP()
            nameArea.append(p)
            p.innerText = text
        }

        //* Cria um parágrafo de erro
        static newP() {
            const p = document.createElement('p')
            p.classList.add('invalid')

            return p
        }
    }
    const form = new Form()
    form.start()
})()
