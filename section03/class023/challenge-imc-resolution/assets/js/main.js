// Capturar evento de submit do formulário

(function myScope() {
    const form = document.querySelector('form')

    form.addEventListener('submit', function (event) {
        event.preventDefault()
        const inputWeight = event.target.querySelector('#weight')
        const inputHeight = event.target.querySelector('#height')

        const weight = Number(inputWeight.value)
        const height = Number(inputHeight.value)

        if (!weight) {
            setResult('Peso inválido', false)
            return
        }

        if (!height) {
            setResult('Altura inválida', false)
            return
        }

        const imc = getImc(weight, height)
        const nivelImc = getNivelImc(imc)
        const msg = `Seu IMC é ${imc} (${nivelImc})`
        setResult(msg, true)
    })

    function getNivelImc(imc) {
        const nivel = [
            'Abaixo do peso',
            'Eutrófico',
            'Sobrepeso',
            'Obesidade grau 1',
            'Obesidade grau 2',
            'Obesidade grau 3'
        ]

        if (imc >= 39.9) return nivel[5]
        if (imc >= 34.9) return nivel[4]
        if (imc >= 29.9) return nivel[3]
        if (imc >= 24.9) return nivel[2]
        if (imc >= 18.9) return nivel[1]
        if (imc < 18.5) return nivel[0]
    }

    function getImc(weight, height) {
        const imc = weight / (height ** 2)
        return imc.toFixed(1)
    }

    function createSpan() {
        const span = document.createElement('span')
        return span
    }

    function setResult(msg, isValid) {
        const result = document.querySelector('.result')
        result.innerText = ''


        const span = createSpan()

        if (!isValid) {
            span.classList.add('failure')
        }

        span.innerText = msg
        result.appendChild(span)
    }
})()