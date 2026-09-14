const fs = require('fs').promises

module.exports = (caminho) => fs.readFile(caminho, 'utf-8') 
// fs retorna uma promise assim como fs.reddir()
