// Módulos do próprio coração do NodeJS, logo, não há necessidade de especificar o caminho
const fs = require('fs').promises
const path = require('path') // Apenas para podermos tratar dos caminhos

async function readdir(rootDir) { // Criamos uma função que recebe um caminho - "caminho/diretório raiz"

    // Um fallback para verificar se o rootDir foi enviado. Caso não, iremos receber path.resolve(__dirname)
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir) // Retorna um array com os nomes dos arquivos/pastas
    walk(files, rootDir) // Delegando serviço pra outra função
}

// Função que percorre o array recebido pela função readdir()
async function walk(files, rootDir) {
    for (let file of files) { // File é a parte final do nome do arquivo
        const fileFullPath = path.resolve(rootDir, file) // Agora temos a parte inicial e final dos arquivos/pastas juntas
        const stats = await fs.stat(fileFullPath)
        
        if (/\.git/g.test(fileFullPath)) continue // Se houver git, ele ignora e continua o loop
        if (/node_modules/g.test(fileFullPath)) continue // Se houver node_modules, ele ignora e continua o loop
        
        if (stats.isDirectory()) { // Se for um diretório
            readdir(fileFullPath) // Retorna na função e liste os arquivos desse diretório
            continue // Para não logar os diretórios e continuar o loop
        }
        
        if (!/\.css$/g.test(fileFullPath)) continue // Se houver node_modules, ele ignora e continua o loop

        console.log(file)
    }
}

readdir('D:/Meus Arquivos/Documentos/estudos/udemy-course.js/classes/')
