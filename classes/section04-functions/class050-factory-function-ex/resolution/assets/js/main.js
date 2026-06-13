(function myScope() {
    function createCalculator() {
        return {
            display: document.querySelector('.display'),

            inicia() {
                this.clickButtons()
                this.pressEnter()
            },

            pressEnter() {
                document.addEventListener('keydown', e => {
                    if (e.key === 'Enter') {
                        e.preventDefault()
                        this.realizaConta()
                    }
                })
            },

            clearDisplay() {
                this.display.value = '0'
            },

            deleteOne() {
                this.display.value = this.display.value.slice(0, -1)
                if (this.display.value === '') {
                    this.display.value = '0'
                }
            },

            realizaConta() {
                let conta = this.display.value
                try {
                    conta = eval(conta)

                    if (!conta) {
                        alert('Conta inválida')
                        return
                    }

                    this.display.value = String(conta)
                } catch (e) {
                    alert('Conta inválida')
                    return
                }
            },

            clickButtons() {
                document.addEventListener('click', e => {
                    const el = e.target
                    if (el.classList.contains('btn-num')) {
                        this.btnParaDisplay(el.innerText)
                    }
                    if (el.classList.contains('btn-clear')) {
                        this.clearDisplay()
                    }

                    if (el.classList.contains('btn-delete')) {
                        this.deleteOne()
                    }

                    if (el.classList.contains('btn-eq')) {
                        this.realizaConta()
                    }
                })
            },

            btnParaDisplay(valor) {
                if (this.display.value === '0') {
                    this.display.value = valor
                } else {
                    this.display.value += valor
                }
            },
        }
    }

    const calculate = createCalculator()
    calculate.inicia()
})()