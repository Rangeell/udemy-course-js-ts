const dynamicParagraphs = {
    p1: document.createElement('p'),
    p2: document.createElement('p'),
    p3: document.createElement('p'),
    p4: document.createElement('p'),
    p5: document.createElement('p'),
    p6: document.createElement('p'),
    p7: document.createElement('p'),
    p8: document.createElement('p'),
    p9: document.createElement('p'),
}

const input = document.querySelector('#iname')
console.log(input)
const button = document.querySelector('input[type="button"]')

input.addEventListener('keydown', function (enter) {
    if (enter.key === 'Enter') {
        enter.preventDefault()
        verificar()
    }
})

button.addEventListener('click', verificar)
function verificar() {

    if (input.value === '') {
        alert('Você precisa digitar o seu nome')
    } else {
        const nome = input.value

        document.body.append(...Object.values(dynamicParagraphs))
        dynamicParagraphs.p1.textContent = `Seu nome é ${nome}`
        dynamicParagraphs.p2.textContent = `Seu nome tem ${nome.length} caracteres.`
        dynamicParagraphs.p3.textContent = `A segunda letra do seu nome é: ${nome.charAt(1)}`
        dynamicParagraphs.p5.textContent = `As últimas 3 letras do seu nome são: ${nome.slice(nome.length - 3)}`
        dynamicParagraphs.p6.textContent = `O primeiro índice do seu nome é: ${nome.charAt(0)}`
        dynamicParagraphs.p6.textContent = `O último índice do seu nome é: ${nome.slice(nome.length - 1)}`
        dynamicParagraphs.p7.textContent = `As palavras do seu nome são: ${nome.split(' ')}`
        dynamicParagraphs.p8.textContent = `Seu nome em letras maiúsculas é: ${nome.toUpperCase()}`
        dynamicParagraphs.p9.textContent = `Seu nome em letras minúsculas é: ${nome.toLowerCase()}`
    }
}