require('dotenv').config() // Injeta as variáveis do arquivo .env na memória do Node
const express = require('express')  // Exportando express
const path = require('path') // Exportado para facilitar o trabalho com caminhos de arquivos

const app = express() // Executando o express

const mongoose = require('mongoose') // Chamando o mongoose (dependência do projeto) -> responsável por modelar a nossa base de dados (através de schemas)
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Conectei à base de dados!')
        app.emit('Pronto') // Assim que a base de dados conectar, o nosso app vai emitir esse sinal/evento
    })
    .catch(e => console.log(e))

const session = require('express-session') // Apenas isso já salva a sessão na memória -> Servem para identificar o navegador do cliente através de um cookie, permitindo que o servidor reconheça o usuário
const MongoStore = require('connect-mongo')(session) // De cara já mandadmos (incomum) a sessão
const flash = require('connect-flash') // Flash Massages (menssagens "auto-destrutivas") -> Feedback para o usuário -> sem session, não funcionam
const routes = require('./routes') // Rotas da nossa aplicação (home, contato, página inicial) caem aqui
const helmet = require('helmet') // Recomendação do Express para deixar a nossa aplicação mais segura
const csrf = require('csurf') // Faz com que todos os formulários tenham um crsf token. O que garante que nenhum site/app externo consiga postar coisas para dentro de nossa aplicação
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware') // Nossos Middleware global e de csrf Error-> Atribuição via desestruturação -> são funções que são executadas em cadeia no meio das rotas

app.use(helmet())
app.use(express.urlencoded({ extended: true })) // Middleware global -> Permite que postemos formulários para dentro de nossa aplicação
app.use(express.json()) // 
app.use(express.static(path.resolve(__dirname, 'public'))) // Middle global -> Avisa ao Express que a pasta 'public' contém os arquivos estáticos do site e permite acessá-los diretamente

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
app.use(csrf())
app.use(flash())

// Chamando nossas rotas
app.use(csrfMiddleware)
app.use(middlewareGlobal) // Nosso middleware global -> todas as requisições, em todas as rotas e em todos os verbos vão passar por esse middleware
app.use(checkCsrfError)
app.use(routes)

//  Dizemos ao Express que usaremos o EJS para renderizar as páginas
app.set('views', path.resolve(__dirname, 'src', 'views')) // Caminho absoluto da nossa pasta de views
app.set('view engine', 'ejs') //Avisamos que usaremos ejs como engine para renderizar os nossos views 

app.on('Pronto', () => { // Capturando o sinal/evento emitido na linha 11 -> Garante que o servido só inicie após a conexão com a base de dados estiver pronta

    app.listen(3000, () => { // Essa função só será chamada (servidor iniciado) quando recebermos sinal/evento 'Pronto' do app.emit()
        console.log('Servidor executando na porta 3000')
        console.log('Acessar http://localhost:3000')
    })
})
