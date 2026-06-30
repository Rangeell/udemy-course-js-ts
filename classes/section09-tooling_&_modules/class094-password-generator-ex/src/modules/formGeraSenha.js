import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada')
const qtdCaracteres = document.querySelector('#caracter')
const chkMaiusculas = document.querySelector('#chk-maiusculas')
const chkMinusculas = document.querySelector('#chk-minusculas')
const chkNumeros = document.querySelector('#chk-numeros')
const chkSimbolos = document.querySelector('#chk-simbolos')
const button = document.querySelector('button')

export default () => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        senhaGerada.innerText = gera()
    })
}

function gera() {
    const senha = geraSenha(
        qtdCaracteres.value, // Retornar true ou false
        chkMaiusculas.checked, // Retornar true ou false
        chkMinusculas.checked, // Retornar true ou false
        chkNumeros.checked, // Retornar true ou false
        chkSimbolos.checked) // Retornar true ou false

    return senha || 'Nada foi selecionado!' // Avaliação de curto-circuito
}