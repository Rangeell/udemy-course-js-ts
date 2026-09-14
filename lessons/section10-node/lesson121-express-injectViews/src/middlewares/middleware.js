module.exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local.' // Disponível em todas as páginas
    next()
}

module.exports.outroMiddleware = (req, res, next) => {
    next()
}