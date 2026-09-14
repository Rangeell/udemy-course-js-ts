import validator from "validator";

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass)
        
        if (!this.form) return

        this.emailInput = this.form.querySelector('input[name="email"]')
        this.passwordInput = this.form.querySelector('input[name="password"]')
    }

    init() {
        this.events()
    }

    events() {
        if (!this.form) return
        this.form.addEventListener('submit', e => {
            e.preventDefault()
            const el = e.target

            this.handleSubmit(el)
        })
    }

    handleSubmit(el) {
        if (this.validate(el)) el.submit()
    }

    validate(el) {
        let valid = true

        this.removeErrorText()

        const email = this.emailInput.value
        const password = this.passwordInput.value

        if (!validator.isEmail(email)) {
            valid = false
            this.createError(this.emailInput, 'E-mail inválido!')
        }

        if (password < 3 || password > 50) {
            valid = false
            this.createError(this.passwordInput, 'A senha precisa ter entre 3 e 50 caracteres!')
        }

        return valid
    }

    createError(input, msg) {
        const div = document.createElement('div')

        div.classList.add('error-text')
        div.innerText = msg

        input.insertAdjacentElement('afterend', div)
    }

    removeErrorText() {
        for (let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove()
        }
    }

}