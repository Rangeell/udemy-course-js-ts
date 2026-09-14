const mongoose = require('mongoose')

// Schema -> esquema/modelagem dos nossos dados
const HomeSchema = new mongoose.Schema({ // Chamamos o construtor do mongoose e usamos o método Schema, onde vamos mandar um objeto com a configuração dos dados que queremos (Schema)

    titulo: { type: String, require: true }, // Garante que o campo seja obrigatório e aceite apenas Strings
    descricao: String
})

const HomeModel = mongoose.model('Home', HomeSchema) // Criando o model -> recebe o nome do model e o schema

class Home {

}

module.exports = Home
