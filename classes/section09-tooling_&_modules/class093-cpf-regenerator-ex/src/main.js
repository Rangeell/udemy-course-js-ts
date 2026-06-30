import GeraCPF from './modules/GeraCpf'
import './assets/css/style.css'

(function () {
    const gera = new GeraCPF() // Instanciando a classe
    const cpfGerado = document.querySelector('.result')
    cpfGerado.innerText = gera.geraNovoCpf() // Chamando o método que gera do CPF
})()
