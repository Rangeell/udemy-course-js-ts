const Contato = require('../models/ContatoModel')

module.exports.index = async (req, res) => {
    try {
        const contatos = await Contato.buscaContatos() // Método estático -> busca os contatos
        res.render('index', { contatos }) // Injetamos os contatos dentro do index.ejs
    } catch (e) {
        console.error(e);
        res.render('404');
    }
}
