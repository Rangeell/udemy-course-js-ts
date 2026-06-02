function zeroAEsquerda(num) {
    return num >= 10 ? num: `0${num}`
}w

function formatDate(data) {
    const dia = data.getDate()
    const mes = zeroAEsquerda(data.getMonth() + 1)
    const ano = data.getFullYear()
    const hora = zeroAEsquerda(data.getHours())
    const min = zeroAEsquerda(data.getMinutes())
    const seg = zeroAEsquerda(data.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date()
const dataBrasil = formatDate(data)
console.log(dataBrasil)
