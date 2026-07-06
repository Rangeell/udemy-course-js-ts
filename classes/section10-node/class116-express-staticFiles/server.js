const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'public'))) // Avisa ao Express que a pasta 'public' contém os arquivos estáticos do site
app.use(routes)

//  Dizemos ao Express que usaremos o EJS para renderizar as páginas
app.set('views', path.resolve(__dirname, 'src', 'views')) // Caminho absoluto da nossa pasta de views
app.set('view engine', 'ejs') // Usaremos ejs como engine para renderizar os nossos views 

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000')
    console.log('Acessar http://localhost:3000')
})
