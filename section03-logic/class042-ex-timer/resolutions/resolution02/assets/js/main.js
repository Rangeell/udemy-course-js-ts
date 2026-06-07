function stopWatch () {
    const timerContainer = document.querySelector('.timer')
    let seconds = 0
    let timer

    // FUNÇÃO PARA CRIAR A HORA A PARTIR DOS SEGUNDOS
    function getTimeFromSeconds(seconds) {
        const date = new Date(seconds * 1000) // JavaScript recebe em milésimos de segundos, por isso precisamosa multiplicar por 1000
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC' // 01/01/1970 00:00:00
        })
    }

    function startStopWatch() {
        timer = setInterval(function () {
            seconds++
            timerContainer.innerText = getTimeFromSeconds(seconds)
        }, 1000)
    }

    document.addEventListener('click', function (e) {
        const element = e.target

        if (element.id === 'start') {
            clearInterval(timer)
            startStopWatch()
            timerContainer.classList.remove('stop')
        }

        if (element.id === 'pause') {
            clearInterval(timer)
            timerContainer.classList.add('stop')
        }

        if (element.id === 'reset') {
            clearInterval(timer)
            timerContainer.classList.remove('stop')
            timerContainer.innerText = '00:00:00'
            seconds = 0
        }
    })
}
stopWatch()