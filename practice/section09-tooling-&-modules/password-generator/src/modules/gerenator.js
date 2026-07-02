const rand = (max, min) => Math.floor(Math.random() * (max - min) + min)

const generateNumbers = () => rand(0, 10)
const generateUppercase = () => String.fromCharCode(rand(65, 90))
const generatelowercase = () => String.fromCharCode(rand(97, 122))

const symbols = '!@#$%&*(){}[]+-/=,.<>'
const generateSymbol = () => symbols[rand(0, symbols.length)]

export default function generate(length, numbers, uppercase, lowercase, symbol) {
    let password = []
    length = Number(length)

    for (let i = 0; i < length; i++) {
        numbers && password.push(generateNumbers())
        uppercase && password.push(generateUppercase())
        lowercase && password.push(generatelowercase())
        symbol && password.push(generateSymbol())
    }

    return password.join('').slice(0, length)
}