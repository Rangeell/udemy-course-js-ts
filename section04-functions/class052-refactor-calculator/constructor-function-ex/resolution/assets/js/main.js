(function myScope() {
    function Calculator() {
        this.display = document.querySelector('.display')

        this.start = () => {
            this.clickButtons()
            this.pressEnter()
        }

        this.clickButtons = () => {
            document.addEventListener('click', event => {
                const el = event.target
                if (el.classList.contains('btn-num')) this.addNumDisplay(el.innerText)
                if (el.classList.contains('btn-clear')) this.clearDisplay()
                if (el.classList.contains('btn-delete')) this.deleteOne()
                if (el.classList.contains('btn-eq')) this.realizaConta()
            })
        }

        this.pressEnter = () => {
            document.addEventListener('keydown', e => {
                if (e.key === 'Enter') {
                    e.preventDefault()
                    this.realizaConta()
                }
            })
        }
        
        this.addNumDisplay = (valor) => {
            if (this.display.value === '0') {
                this.display.value = valor
            } else {
                this.display.value += valor
            }
        }
        
        this.clearDisplay = () => this.display.value = '0'
        
        this.deleteOne = () => {
            this.display.value = this.display.value.slice(0, -1)
            if (this.display.value === '') {
                this.display.value = '0'
            }
        }

        this.realizaConta = () => {
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
        }
    }

    const calculate = new Calculator()
    calculate.start()
})()
