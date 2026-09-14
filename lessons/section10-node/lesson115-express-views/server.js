const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')

app.set('views', path.resolve(__dirname, 'src', 'views')) // Caminho absoluto da nossa pasta de views
app.set('view engine', 'ejs') // Usaremos ejs como engine para renderizar os nossos views 

app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000')
    console.log('Acessar http://localhost:3000')
})
