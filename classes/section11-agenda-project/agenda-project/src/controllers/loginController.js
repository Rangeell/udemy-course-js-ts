const Login = require('../models/loginModel')

module.exports.index = (req, res) => {
    if (req.session.user) return res.render('login-logado')
    return res.render('login')
}

module.exports.register = async (req, res) => {
    try {
        const login = new Login(req.body) // Enviando o body da requisição para a classe do loginModel.js
        await login.register() // Como o método também retornar uma promise, precisamos de async / await aqui também

        if (login.errors.length > 0) { // Se houver algum erro
            req.flash('errors', login.errors)
            req.session.save(function () { // Primeiro salvamos a sessão
                return res.redirect('/login/index') // Volta a página para onde o usuário veio e interrompe a função
            })
            return
        }

        req.flash('success', 'Seu usuário foi criado com sucesso')
        req.session.save(function () { // Primeiro salvamos a sessão
            return res.redirect('/login/index') // Volta a página para onde o usuário veio e interrompe a função
        })
    } catch (e) {
        console.log(e)
        return res.render('404')
    }
}

module.exports.login = async (req, res) => {
    try {
        const login = new Login(req.body) // Enviando o body da requisição para a classe do loginModel.js
        await login.login() // Como o método também retornar uma promise, precisamos de async / await aqui também

        if (login.errors.length > 0) { // Se houver algum erro
            req.flash('errors', login.errors)
            req.session.save(function () { // Primeiro salvamos a sessão
                return res.redirect('/login/index') // Volta a página para onde o usuário veio e interrompe a função
            })
            return
        }

        req.flash('success', 'Login realizado!')
        req.session.user = login.user // Salvamos o usuário completo na sessão do servidor (identificamos o navegador como sendo navegador do usuário)
        req.session.save(function () { // Primeiro salvamos a sessão
            return res.redirect('/login/index') // Volta a página para onde o usuário veio e interrompe a função
        })
    } catch (e) {
        console.log(e)
        return res.render('404')
    }
}

module.exports.logout = (req, res) => {
    req.session.destroy()
    res.redirect('/')
}