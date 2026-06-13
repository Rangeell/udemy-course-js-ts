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
        dynamicParagraphs.p1.innerHTML = `Seu nome é <strong>${nome}</strong>`
        dynamicParagraphs.p2.innerHTML = `Seu nome tem <strong>${nome.length}</strong> caracteres.`
        dynamicParagraphs.p3.innerHTML = `A segunda letra do seu nome é: <strong>${nome[1]}</strong>`
        dynamicParagraphs.p4.innerHTML = `As últimas 3 letras do seu nome são: <strong>${nome.slice(-3)}</strong>`
        dynamicParagraphs.p5.innerHTML = `O primeiro índice da letra 'o' seu nome é: <strong>${nome.search(/r/i)}</strong>`
        dynamicParagraphs.p6.innerHTML = `O último índice da letra 'o' seu nome é: <strong>${nome.lastIndexOf('o')}</strong>`
        dynamicParagraphs.p7.innerHTML = `As palavras do seu nome são: <strong>${nome.split(' ')}</strong>`
        dynamicParagraphs.p8.innerHTML = `Seu nome em letras maiúsculas é: <strong>${nome.toUpperCase()}</strong>`
        dynamicParagraphs.p9.innerHTML = `Seu nome em letras minúsculas é: <strong>${nome.toLowerCase()}</strong>`
    }
}