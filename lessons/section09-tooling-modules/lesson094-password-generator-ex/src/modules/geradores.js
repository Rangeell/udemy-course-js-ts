// Modulo responsável por gerar as senhas e caracteres

const rand = (max, min) => Math.floor(Math.random() * (max - min) + min)
const geraMaiuscula = () => String.fromCharCode(rand(65, 91))
const geraMinuscula = () => String.fromCharCode(rand(97, 123))
const geraNumero = () => String.fromCharCode(rand(48, 58))
const geraCaracter = () => String.fromCharCode(rand())

const simbolos = ',.;^~[]!@#$%*()_+-={}'
const geraSimbolo = () => simbolos[rand(0, simbolos.length)]

export default function geraSenha(qtd, maisculas, minusculas, numeros, simbolos) {
    const senhaArray = []
    qtd = Number(qtd) // Converte o que vier do input HTML em Number

    for (let i = 0; i < qtd; i++) {
        
        // Se maiscula retornar true, ou seja, se ela existir, executa o push
        maisculas && senhaArray.push(geraMaiuscula()) // Avaliação de curto-circuito

        minusculas && senhaArray.push(geraMinuscula()) // Avaliação de curto-circuito
        numeros && senhaArray.push(geraNumero()) // Avaliação de curto-circuito
        simbolos && senhaArray.push(geraSimbolo()) // Avaliação de curto-circuito
    }

    return senhaArray.join('').slice(0, qtd)
}
geraSenha(5, true, true, true)
