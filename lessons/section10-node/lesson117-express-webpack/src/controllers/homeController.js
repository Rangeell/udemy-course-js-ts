module.exports.paginaInicial = (req, res) => {
    res.render('index') // Não é necessário informar a extensão "ejs"
}

module.exports.trataPost = (req, res) => {
    res.send('Sou sua nova rota de post!')
}
