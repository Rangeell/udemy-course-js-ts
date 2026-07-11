module.exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors') // Disponível em todas as páginas
    res.locals.success = req.flash('success')
    res.locals.user = req.session.user
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
module.exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors') // Disponível em todas as páginas
    res.locals.success = req.flash('success')
    res.locals.user = req.session.user
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

module.exports.loginRequired = (req, res, next) => {
    if (!req.session.user) { // Significa que o usuário não está logado
        req.flash('errors', 'Você precisa fazer login.')
        req.session.save(() => res.redirect('/')) // Importante salvar a sessão antes de redirecionar para garantir que ela foi salva
        return
    }
    next() // Se passar na validação, passa para o próximo middleware
}
