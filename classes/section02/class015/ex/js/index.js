 // Create Paragraphs
const dynamicParagraphs = {
    p1: document.createElement('p'),
    p2: document.createElement('p'),
    p3: document.createElement('p'),
    p4: document.createElement('p'),
    p5: document.createElement('p')
}

// SELECT DOM ELEMENTS
const div = document.querySelector('div')
const h1 = document.querySelector('h1')
const button = document.querySelector('input[type="button"')

// FUNCTION TO FORMAT NUMBER
function formatNumber(number) {
    return number.toString().replace('.', ',')
}

// FUNCTION "VERIFICAR"
button.addEventListener('click', verificar)
function verificar() {
    let text = prompt('Digite um número')
    let number = Number(text)
    div.innerHTML = ''

    if (text === '' || text === null) {
        h1.textContent = `Você não digitou nenhum número! :(`
        return
    }

    if (Number.isNaN(number)) {
        div.appendChild(dynamicParagraphs.p1)

        h1.textContent = `"${text}" não é um número!`
        dynamicParagraphs.p1.textContent = `"${text}" não é um número. Digite um número para ver todos os resultados possíveis.`
        return
    } 

    div.append(...Object.values(dynamicParagraphs))
    h1.textContent = `Seu número é ${number}`

    if (Number.isInteger(number)) {
        dynamicParagraphs.p1.textContent = `O número ${number} é inteiro.`
    } else {
        dynamicParagraphs.p1.textContent = `O número ${formatNumber(number)} é decimal.`
    }

    dynamicParagraphs.p2.textContent = `A raiz quadrada de ${formatNumber(number)} é: ${formatNumber(Math.sqrt(number).toFixed(2))}`
    dynamicParagraphs.p3.textContent = `Arredondando para baixo: ${Math.floor(number)}`
    dynamicParagraphs.p4.textContent = `Arredondando para cima: ${Math.ceil(number)}`
    dynamicParagraphs.p5.textContent = `Com duas casas decimais: ${formatNumber(number.toFixed(2))}`
}