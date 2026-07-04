const express = require('express')
const app = express()

// CRUD -> Create, Read, Update, Delete
//          POST    GET   PUT  DELETE 
// htttp://meusite.com/ <- GET -> para que entregue a página / (raíz)
// htttp://meusite.com/sobre <- GET -> para que entregue a página /sobre
// htttp://meusite.com/contato <- GET -> para que entregue a página /contato

// Primeiro parâmetro é uma rota e o segundo é uma função
app.get('/', (req, res) => { 
    res.send(`Hello world!`)
}) // Por sua vez, essa função recebe request e response como parâmetro

app.listen(3000)
