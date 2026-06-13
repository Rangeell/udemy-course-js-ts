// FUNÇÃO QUE RETORNA OUTRA FUNÇÃO

function falaFrase (comeco) {
    function falaResto(resto) {
        return `${comeco} ${resto}`
    }
    return falaResto
}

const fala = falaFrase('Olá')
const resto = fala('mundo!')
console.log(resto)

