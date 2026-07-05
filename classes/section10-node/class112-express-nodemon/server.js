const express = require('express')
const app = express()

// CRUD -> Create, Read, Update, Delete
//          POST    GET   PUT  DELETE 
// htttp://meusite.com/ <- GET -> para que entregue a página / (raíz)
// htttp://meusite.com/sobre <- GET -> para que entregue a página /sobre
// htttp://meusite.com/contato <- GET -> para que entregue a página /contato

// Primeiro parâmetro é uma rota e o segundo é uma função
app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">

        <button>Enviar</button>
        </form>
        `)
}) // Por sua vez, essa função recebe request e response como parâmetro

app.post('/', (req, res) => { // Criar algo -> mandadmos dados no corpo da requisição
    res.send('Recebi o formulário!')
})

app.get('/contato', (req, res) => {
    res.send('<p>Obrigado por entrar em contato conosco!</p>')
})

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000')
    console.log('Acessar http://localhost:3000')
})
