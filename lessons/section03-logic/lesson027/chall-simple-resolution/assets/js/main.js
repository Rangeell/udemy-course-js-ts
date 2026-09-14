(function   myScope() {
    // SELECT DATE
    const date = new Date()

    // FUNCTION GREETING
    function greeting(hours) {
        if (hours < 6) return 'Boa madrugada!'
        if (hours < 12) return 'Bom dia!'
        if (hours < 18) return 'Boa tarde!'
        return 'Boa noite!'
    }

    // FUNCTION TO SET RESULT
    function setGreeting() {
        const h1 = document.querySelector('h1')
        const h2 = document.querySelector('h2')
        const hours = date.getHours()

        h1.innerText = greeting(hours)
        h2.innerHTML = date.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'})
    }
    setGreeting()
})()
