const mongoose = require('mongoose')
const validator = require('validator')

// Schema -> esquema/modelagem dos nossos dados
const ContatoSchema = new mongoose.Schema({ // Chamamos o construtor do mongoose e usamos o método Schema, onde vamos mandar um objeto com a configuração dos dados que queremos (Schema)

    nome: { type: String, require: true }, // Garante que o campo seja obrigatório e aceite apenas Strings
    sobrenome: { type: String, require: false, default: '' }, // Se não for enviado, é uma string vazia
    email: { type: String, require: false, default: '' },
    telefone: { type: String, require: false, default: '' },
    criadoEm: { type: Date, default: Date.now } // Criado automaticamente com a data de quando foi registrado
})

const ContatoModel = mongoose.model('Contato', ContatoSchema) // Criando o model -> recebe o nome do model e o schema

function Contato(body) { // Variando de class para constructor function
    this.body = body
    this.errors = []
    this.contato = null
}

Contato.prototype.register = async function () { // Mexe com BD, logo, retorna promise
    this.valida()

    if (this.errors.length > 0) return

    this.contato = await ContatoModel.create(this.body)
}

Contato.prototype.valida = function () { // Faz a validação dos campos
    this.cleanUp()

    // O e-mail precisa ser válido, caso tenha sido enviado
    if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido')

    if (!this.body.nome) this.errors.push('Nome é um campo obrigatório')
    if (!this.body.email && !this.body.telefone) {
        this.errors.push('Pelo menos um contato precisa ser enviado: e-mail ou telefone')
    }

}

Contato.prototype.cleanUp = function () {
    // Passa por todas a chaves do objeto req.body, garantindo que tudo dentro do body seja uma string
    for (let key in this.body) {
        if (typeof this.body[key] !== 'string') {
            this.body[key] = '' // Converte pra uma string vazio, por segurança
        }
    }

    // Elimina a chave do CSRF para não ir para o BD
    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        email: this.body.email,
        telefone: this.body.telefone
    }
}

Contato.prototype.edit = async function (id) {
    if (typeof id !== 'string') return
    this.valida() // Precisamos validar, pois os campos são enviados novamente
    if (this.errors.length > 0) return

    // Encontra por id e atualiza os dados do que der match
    this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true }) // new: true faz retornar os dados atualizados
}

//  Métodos estáticos

// Não está atrelado ao prototype, ou seja, não precisamos instanciar para usar essa função (estática)
Contato.buscaPorId = async function (id) {
    if (typeof id !== 'string') return

    const contato = await ContatoModel.findById(id)
    return contato
}

// Queremos que eles fiquem ordenados na ordem em que foram criados de maneira decrescente
Contato.buscaContatos = async function () {
    const contatos = await ContatoModel.find()
        .sort({ criadoEm: -1 }) // Qual campo queremos que ordene? -> criadoEm -> 1 para crescente e -1 para decrescente
    return contatos
}

Contato.delete = async function (id) {
    if (typeof id !== 'string') return

    const contato = await ContatoModel.findOneAndDelete({ _id: id })
    return contato
}

module.exports = Contato
