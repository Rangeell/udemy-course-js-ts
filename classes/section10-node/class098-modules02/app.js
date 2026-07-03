const Cachorro = require('./Z/mod02.js')
const c1 = new Cachorro('Juvenal')
c1.latir()

const path = require('path')

console.log(__filename)
console.log(__dirname)
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'js') )
