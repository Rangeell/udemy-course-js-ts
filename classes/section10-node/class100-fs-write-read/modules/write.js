const fs = require('fs').promises

// Exportando e criando uma função anônima que escreve dados em um caminho especificado
module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w', encoding: 'utf-8' })
}
