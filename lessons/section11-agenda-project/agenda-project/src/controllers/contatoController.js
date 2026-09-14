const Contato = require('../models/ContatoModel')

module.exports.index = (req, res) => {
    res.render('contato', {
        contato: {} // Corrige o erro de contato is not defined ao tentar cadastrar um novo contato (formulário em branco)
    })
}

// Processa a criação do contato
module.exports.register = async (req, res) => { // Precisa ser async, pois o register() retorna uma promise
    try {
        const contato = new Contato(req.body)
        await contato.register()

        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors) //
            req.session.save(() => res.redirect('/contato/index')) // Importante salvar a sessão antes de redirecionar para garantir que ela foi salva
            return
        }

        req.flash('success', 'Contato registrado com sucesso!')
        req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`)) // Importante salvar a sessão antes de redirecionar para garantir que ela foi salva
        return
    } catch (e) {
        console.log(e)
        return res.render('404')
    }
}

module.exports.editIndex = async (req, res) => {
    if (!req.params.id) return res.render('404') // Se não for recebido um parâmetro com id

    const contato = await Contato.buscaPorId(req.params.id)

    if (!contato) return res.render('404') // Se o contato não existir

    res.render('contato', { contato })
}

module.exports.edit = async (req, res) => {
    try {
        if (!req.params.id) return res.render('404') // Se não for recebido um parâmetro com id

        const contato = new Contato(req.body)
        await contato.edit(req.params.id)

        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors) //
            req.session.save(() => res.redirect(`/contato/index/${req.params.id}`)) // Importante salvar a sessão antes de redirecionar para garantir que ela foi salva
            return
        }

        req.flash('success', 'Contato editado com sucesso!')
        req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`)) // Importante salvar a sessão antes de redirecionar para garantir que ela foi salva
        return
    } catch (e) {
        console.log(e)
        res.render('404')
    }
}

module.exports.delete = async (req, res) => {
    try {
        if (!req.params.id) return res.render('404') // Se não for recebido um parâmetro com id
    
        const contato = await Contato.delete(req.params.id)
        if (!contato) return res.render('404') // Se o contato não existir
    
        req.flash('success', 'Contato apagado com sucesso!')
        req.session.save(() => res.redirect(`/`)) // Importante salvar a sessão antes de redirecionar para garantir que ela foi salva

    } catch (e) {
        console.error(e);
        res.render('404');
    }

}