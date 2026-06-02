(function myScope() {

    const timerContainer = document.querySelector('.timer')
    let seconds = 0
    let timeInterval = null

    function getTimeString(rawSeconds) {
        const hours = padZero(Math.floor(rawSeconds / 3600))
        const minutes = padZero(Math.floor(rawSeconds % 3600 / 60))
        const seconds = padZero(Math.floor(rawSeconds % 60))

        return `${hours}:${minutes}:${seconds}`
    }

    function padZero(time) {
        return time.toString().padStart('2', 0)
    }

    const startButton = document.querySelector('#start')
    startButton.addEventListener('click', function () {
        clearInterval(timeInterval)

        timerContainer.classList.remove('stop')

        timeInterval = setInterval(function () {
            seconds++
            const stopWatch = getTimeString(seconds)
            timerContainer.innerText = stopWatch
        }, 1000)
    })

    const pauseButton = document.querySelector('#pause')
    pauseButton.addEventListener('click', function () {
        timerContainer.classList.add('stop')
        clearInterval(timeInterval)
    })

    const resetButton = document.querySelector('#reset')
    resetButton.addEventListener('click', function () {
        clearInterval(timeInterval)
        seconds = 0

        timerContainer.innerText = '00:00:00'
        timerContainer.classList.remove('stop')
    })
})()