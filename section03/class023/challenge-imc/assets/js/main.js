(function myScope() {
    // Select DOM elements
    const element = {
        form: document.querySelector('form'),
        weight: document.querySelector('#iweight'),
        height: document.querySelector('#iheight'),
        divResult: document.querySelector('.res')
    }

    element.form.addEventListener('submit', function (evento) {
        evento.preventDefault()
        element.divResult.innerText = ''

        const weight = Number((element.weight.value))
        const height = Number((element.height.value))

        const resulText = document.createElement('span')
        const imc = (weight / (height ** 2)).toFixed(1)

        let imcResult = 'Abaixo do peso'
        if (imc < 18.5) {
        } else if (imc <= 24.9) {
            imcResult = 'Eutrófico'
        } else if (imc <= 29.9) {
            imcResult = 'Sobrepeso'
        } else if (imc <= 34.9) {
            imcResult = 'Obesidade grau 1'
        } else if (imc <= 39.9) {
            imcResult = 'Obesidade grau 2'
        } else {
            imcResult = 'Obesidade grau 3'
        }

        element.divResult.appendChild(resulText)
        resulText.innerText = `Seu IMC é ${imc} (${imcResult})`
    })
})()