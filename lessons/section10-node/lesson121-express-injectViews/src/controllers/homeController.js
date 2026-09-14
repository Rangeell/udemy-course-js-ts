module.exports.paginaInicial = (req, res) => {
    res.render('index', { // Função que renderiza o "index.ejs" -> disponível apenas na página inicial
        titulo: 'Este será o título da página',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    })
    return
}

module.exports.trataPost = (req, res) => {
    res.send(req.body)
    return
}
