const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste.json')
const escrever = require('./modules/write') // Importando função
const ler = require('./modules/read') // Importando função

const pessoas = [ // Dados
    { nome: 'Jõao' },
    { nome: 'Maria' },
    { nome: 'Eduardo' },
    { nome: 'Luíza' }
]

// Converte dados em JSON e formata identação
const json = JSON.stringify(pessoas, '', 2)
// escrever(caminhoArquivo, json) // Executando função do './modules/write.js'

async function lerArquivo(caminho) {
    const dados = await ler(caminho)
    renderizaDados(dados)
}

function renderizaDados(dados) {
    // Converte Dados JSON em um objeto JS para poder ser iterado ou manipulado de qualquer forma
    dados = JSON.parse(dados)
    dados.forEach(v => console.log(v)) // A cada iteração retorna um objeto
}


lerArquivo(caminhoArquivo)