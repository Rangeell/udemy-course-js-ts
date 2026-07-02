import generatePassord from "./gerenator";

const button = document.querySelector('button')
const result = document.querySelector('.result')

const length = document.querySelector('#length')
const numbers = document.querySelector('#number')
const uppercase = document.querySelector('#uppercase')
const lowercase = document.querySelector('#lowercase')
const symbol = document.querySelector('#symbol')
console.log()

export default () => {
    button.addEventListener('click', e => {
        e.preventDefault()
        result.innerText = generate()
    })
}

function generate() {
    const password = generatePassord(
        length.value,
        numbers.checked,
        uppercase.checked,
        lowercase.checked,
        symbol.checked
    )

    return password || 'Nada foi selecionado!'
}
