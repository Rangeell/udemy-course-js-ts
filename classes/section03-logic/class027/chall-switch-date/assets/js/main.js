(function myScope() {
    // OBJECT TO SELECT DATAS FOR GREETING
    const now = new Date()
    const date = {
        weekDay: now.getDay(),
        monthDay: now.getDate(),
        month: now.getMonth(),
        year: now.getFullYear(),
        hours: now.getHours(),
        minutes: now.getMinutes(),
        text: document.querySelector('h1')
    }

    // FUNCTION GREETING
    function greeting(hours) {
        if (hours < 6) return 'Boa madrugada!'
        if (hours < 12) return 'Bom dia!'
        if (hours < 18) return 'Boa tarde!'
        return 'Boa noite!'
    }

    // FUNCTION TO FORMAT HOURS & MINUTES
    function formatTime(hours, minutes) {
        const paddedHours = hours.toString().padStart(2, '0')
        const paddedMinutes = minutes.toString().padStart(2, '0')

        return `${paddedHours}:${paddedMinutes}`
    }

    // FUNCTION TO GET NAME OF WEEK DAY
    function getWeekDay(day) {
        switch (day) {
            case 0: return 'Domingo'
            case 1: return 'Segunda-feira'
            case 2: return 'Terça-feira'
            case 3: return 'Quarta-feira'
            case 4: return 'Quinta-feira'
            case 5: return 'Sexta-feira'
            case 6: return 'Sábado'
            default: return 'Dia da semana não identificado'
        }
    }

    // FUNCTION TO GET NAME OF MONTH 
    function getMonth(month) {
        const months = [
            'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
        ]
        return months[month] || 'mês não identificado'
    }

    // FUNCTION TO CREATE H1
    function createH1() {
        const h1 = document.createElement('h1')
        return h1
    }

    // FUNCTION TO CREATE H2
    function createH2() {
        const h2 = document.createElement('h2')
        return h2
    }

    // FUNCTION TO SET GREETING ON MAIN CONTAINER
    function setGreeting() {
        const resultContainer = document.querySelector('main')
        const h1 = createH1()
        const h2 = createH2()

        h1.innerText = greeting(date.hours)
        
        h2.innerText = `${getWeekDay(date.weekDay)}, ${date.monthDay} de ${getMonth(date.month)} de ${date.year}. Agora são ${formatTime(date.hours, date.minutes)}`

        resultContainer.append(h1, h2)
    }
    setGreeting()
})()
