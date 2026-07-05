const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">

        <button>Enviar</button>
        </form>
        `)
})

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => { 
    console.log(req.query)
    console.log(req.params.nome)
    res.send('Oi')
})

app.post('/', (req, res) => {
    res.send('Recebi o formulário!')
})

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000')
    console.log('Acessar http://localhost:3000')
})
