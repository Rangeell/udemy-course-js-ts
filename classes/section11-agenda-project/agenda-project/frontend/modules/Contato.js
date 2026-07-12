import validator from 'validator'

export default class Contato {
    constructor(form) {
        this.form = form

        if (!this.form) return;

        this.nameInput = this.form.querySelector('#nome')
        this.emailInput = this.form.querySelector('#email')
        this.telInput = this.form.querySelector('#tel')

        this.init()
    }

    init() {
        this.events()
    }

    events() {
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

        const name = this.nameInput.value.trim()
        const email = this.emailInput.value.trim()
        const tel = this.telInput.value.trim()

        this.removeErrorText()

        if (!name) {
            valid = false
            this.createError(this.nameInput, 'Campo obrigatório!')
        }

        if (!email && !tel) {
            valid = false
            this.createError(this.emailInput, 'E-mail ou telefone precisam ser preenchidos!')
            this.createError(this.telInput, 'E-mail ou telefone precisam ser preenchidos!')
        } else if (email && !validator.isEmail(email)) {
            valid = false
            this.createError(this.emailInput, 'E-mail inválido!')
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
