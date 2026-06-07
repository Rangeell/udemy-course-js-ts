(function myScope() {
    const timerContainer = document.querySelector('.timer')
    const startButton = document.querySelector('#start')
    const pauseButton = document.querySelector('#pause')
    const resetButton = document.querySelector('#reset')

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

    startButton.addEventListener('click', function (event) {
        clearInterval(timer)
        startStopWatch()
        timerContainer.classList.remove('stop')
    })

    pauseButton.addEventListener('click', function () {
        clearInterval(timer)
        timerContainer.classList.add('stop')
    })

    resetButton.addEventListener('click', function () {
        clearInterval(timer)
        timerContainer.classList.remove('stop')
        timerContainer.innerText = '00:00:00'
        seconds = 0
    })
})()