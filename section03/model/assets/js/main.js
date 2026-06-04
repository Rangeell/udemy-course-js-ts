(function myScope() {
    // Select DOM elements

    let resulText
    const element = {
        form: document.querySelector('form'),
        weight: document.querySelector('#iweight'),
        height: document.querySelector('#iheight'),
        divResult: document.querySelector('.res'),
        buttonClear: document.querySelector('button[type="reset"]')
    }

    element.form.addEventListener('submit', function (evento) {
        evento.preventDefault()
        element.weight.focus()
        element.divResult.innerText = ''

        const weight = Number((element.weight.value))
        const height = Number((element.height.value))

        resulText = document.createElement('span')
        const imc = (weight / (height ** 2)).toFixed(1)

        let imcResult
        if (imc < 18.5) {
            imcResult = 'Abaixo do peso'
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

    element.buttonClear.addEventListener('click', function clear() {
        resulText.remove()
    })

})()