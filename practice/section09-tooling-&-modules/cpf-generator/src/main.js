import GeneratorCpf from './modules/generator'
import './assets/css/style.css'

(function () {
    const generate = new GeneratorCpf()

    const button = document.querySelector("button")
    const result = document.querySelector('section')

    button.addEventListener('click', (e) => {
        result.innerText = generate.generateCpf()
    })
})()
