const axios = require('axios')
const path = require('path')
const mod1 = require('./mod01') // Podemos usar tanto o caminho absoluto quanto o caminho relativo
const falaNome = mod1.falaNome

const { Pessoa } = require('./mod02')
const p1 = new Pessoa('Breno')

console.log(falaNome())
console.log(p1)
