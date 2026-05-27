const pontuacaoUsuario = 1000

const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuário VIP" : 'Usuário normal'

const corUsuario = null
const theme = corUsuario || 'Tema Preto' // Fallback
console.log(nivelUsuario, theme)