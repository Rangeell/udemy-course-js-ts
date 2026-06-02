(function myScope() {

    const timerContainer = document.querySelector('.timer')
    let seconds = 0
    let stopWatch = 0

    const startButton = document.querySelector('#start')
    startButton.addEventListener('click', function () {
        clearInterval(stopWatch)

        timerContainer.classList.remove('stop')

        stopWatch = setInterval(function () {
            console.log(seconds++)
        }, 1000)
    })

    const pauseButton = document.querySelector('#pause')
    pauseButton.addEventListener('click', function () {
        timerContainer.classList.add('stop')
        clearInterval(stopWatch)
    })

    const resetButton = document.querySelector('#reset')
    resetButton.addEventListener('click', function () {
        timerContainer.classList.remove('stop')
        clearInterval(stopWatch)
        seconds = 0
    })

    function formatTimer(time) {
        return time.toString().padStart('2', 0)
    }

    function getTimer(rawSeconds) {
        const hours = formatTimer(Math.floor(rawSeconds / 3600))
        const minutes = formatTimer(Math.floor(rawSeconds % 3600 / 60))
        const seconds = formatTimer(Math.floor(minutes % 60))

        return `${hours}:${minutes}:${seconds}`
    }
})()