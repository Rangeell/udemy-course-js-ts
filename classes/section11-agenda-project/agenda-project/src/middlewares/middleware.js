module.exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local.' // Disponível em todas as páginas
    next()
}

module.exports.outroMiddleware = (req, res, next) => {
    next()
}

module.exports.checkCsrfError = ((err, req, res, next) => {
    if (err) {
        return res.render('404') // Se ocorrer o erro, renderizamos a página de erro
    }
    next() 
})

module.exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}
