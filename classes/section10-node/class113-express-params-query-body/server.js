const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">

        <button>Enviar</button>
        </form>
        `) // Atributo name -> vai para o método post como a chave do nosso objeto
})

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.query) // Acessa as query strings -> ex: /profiles/?chave1=valor1&chave2=valor2 ... etc
    console.log(req.params) // "Partes" que vêm na rota da URL -> ex: profiles/3
    res.send('Oi')
})

app.post('/', (req, res) => {
    console.log(req.body) // Acessa os dados enviados no corpo da requisição (geralmente via formulários POST)
    res.send(`O que você me enviou foi: ${req.body.nome}`)
})

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000')
    console.log('Acessar http://localhost:3000')
})
