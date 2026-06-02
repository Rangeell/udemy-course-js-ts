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
})()