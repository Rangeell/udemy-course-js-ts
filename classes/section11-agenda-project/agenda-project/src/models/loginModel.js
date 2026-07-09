const mongoose = require('mongoose')
const validator = require('validator')

// Schema -> esquema/modelagem dos nossos dados
const LoginSchema = new mongoose.Schema({ // Chamamos o construtor do mongoose e usamos o método Schema, onde vamos mandar um objeto com a configuração dos dados que queremos (Schema)

    email: { type: String, required: true }, // Garante que o campo seja obrigatório e aceite apenas Strings
    password: { type: String, required: true } // Garante que o campo seja obrigatório e aceite apenas Strings
})

const LoginModel = mongoose.model('Login', LoginSchema) // Criando o model -> recebe o nome do model e o schema

class Login {
    constructor(body) { // Recebe o body da requisição (req.body - post)
        this.body = body
        this.errors = [] // Se houver algum erro aqui dentro, significa que não podemos cadastrar o usuário na BD
        this.user = null
    }

    async register() { // Tudo que ele retorna, também é uma promise
        this.valida()
        if (this.errors.length > 0) return // Se o array não estiver vazio, cai fora

        try {
            this.user = await LoginModel.create(this.body) // Salva o usuário na BD
        } catch (e) {
            console.log(e)
        }
    }

    valida() { // Faz a validação dos campos
        this.cleanUp()

        // O e-mail precisa ser válido
        if (!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido')

        //  A senha precisa ter entre 3 e 50 caracteres
        if (this.body.password.length < 3 || this.body.password.length > 50) {
            this.errors.push('A senha precisa ter entre 3 e 50 caracteres')
        }
    }

    cleanUp() {
        // Passa por todas a chaves do objeto req.body, garantindo que tudo dentro do body seja uma string
        for (let key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '' // Converte pra uma string vazio, por segurança
            }
        }

        // Elimina a chave do CSRF para não ir para o BD
        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }
}

module.exports = Login
