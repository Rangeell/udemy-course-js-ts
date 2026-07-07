require('dotenv').config() //  Injeta as variáveis do arquivo .env na memória do Node

const express = require('express')
const path = require('path')

const app = express()

const mongoose = require('mongoose') // Chamando o mongoose (dependência do projeto)
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Conectei à base de dados!')
        app.emit('Pronto') // Assim que a base de dados conectar, o nosso app vai emitir esse sinal/evento
    })
    .catch(e => console.log(e))

const session = require('express-session') // Apenas isso já salva a sessão na memória
const MongoStore = require('connect-mongo')(session) // De cara já mandadmos (incomum) a sessão
const flash = require('connect-flash') // Flash Massages

const routes = require('./routes')
const { middlewareGlobal } = require('./src/middlewares/middleware') // Nosso Middleware global -> Atribuição via desestruturação

app.use(express.urlencoded({ extended: true })) // Middleware global -> 
app.use(express.static(path.resolve(__dirname, 'public'))) // Middle global -> Avisa ao Express que a pasta 'public' contém os arquivos estáticos do site
app.use(middlewareGlobal) // Nosso middleware global -> todas as requisições, em todas as rotas e em todos os verbos vão passar desse middleware
app.use(routes)

const sessionOptions = session({
    secret: process.env.SECRET,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
        httpOnly: true,
    },
})
app.use(sessionOptions)
app.use(flash())

//  Dizemos ao Express que usaremos o EJS para renderizar as páginas
app.set('views', path.resolve(__dirname, 'src', 'views')) // Caminho absoluto da nossa pasta de views
app.set('view engine', 'ejs') //Avisamos que usaremos ejs como engine para renderizar os nossos views 

app.on('Pronto', () => { // Capturando o sinal/evento emitido na linha 11 -> Garante que o servido só inicie após a conexão com a base de dados estiver pronta

    app.listen(3000, () => { // Essa função só será chamada (servidor iniciado) quando recebermos sinal/evento 'Pronto' do app.emit()
        console.log('Servidor executando na porta 3000')
        console.log('Acessar http://localhost:3000')
    })
})
