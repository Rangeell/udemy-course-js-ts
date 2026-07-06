const express = require('express')
const path = require('path')
const app = express()
const routes = require('./routes')
const { middlewareGlobal } = require('./src/middlewares/middleware') // Nosso Middleware global -> Atribuição via desestruturação

app.use(express.urlencoded({ extended: true })) // Middleware global -> 
app.use(express.static(path.resolve(__dirname, 'public'))) // Middle global -> Avisa ao Express que a pasta 'public' contém os arquivos estáticos do site
app.use(middlewareGlobal) // Nosso middleware global -> todas as requisições, em todas as rotas e em todos os verbos vão passar desse middleware
app.use(routes)

//  Dizemos ao Express que usaremos o EJS para renderizar as páginas
app.set('views', path.resolve(__dirname, 'src', 'views')) // Caminho absoluto da nossa pasta de views
app.set('view engine', 'ejs') // Usaremos ejs como engine para renderizar os nossos views 

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000')
    console.log('Acessar http://localhost:3000')
})
