const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')

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

    async login() {
        this.valida()
        if (this.errors.length > 0) return
        this.user = await LoginModel.findOne({ email: this.body.email })

        if (!this.user) { // Verifica se o user não existe
            this.errors.push('Usuário ou senha inválidos.')
            return
        }

        if (!bcryptjs.compareSync(this.body.password, this.user.password)) { // Compara senha enviada com a senha do BD

            this.errors.push('Senha inválida')
            this.user = null // Garantindo que ele seja null se não passar
            return
        }
    }

    async register() { // Tudo que ele retorna, também é uma promise
        this.valida()
        if (this.errors.length > 0) return // Se o array não estiver vazio, cai fora -> verifica os dados puros enviados no formulário

        await this.userExists()

        if (this.errors.length > 0) return // Checamos mais uma vez com os dados do BD (se o usuário já existe)

        const salt = bcryptjs.genSaltSync() // Gera caracteres aleátorios para tornar a hash mais segura
        this.body.password = bcryptjs.hashSync(this.body.password, salt) // Faz o hash com a senha e o salt

        this.user = await LoginModel.create(this.body) // Salva o usuário na BD
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

    // Método que varre o banco procurando se o e-mail já está cadastrado
    async userExists() {
        // Verifica se há UM registro na BD que seja idêntico ao e-mail enviado
        this.user = await LoginModel.findOne({ email: this.body.email }) // Retorna o usuário ou null (falsy)
        if (this.user) this.errors.push('Usuário já cadastrado') // Se o usuário já existir, push erro
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
