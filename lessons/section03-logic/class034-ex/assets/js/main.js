(function myScope() {
    const main = document.querySelector('main')
    const p = document.querySelectorAll('p')

    const stylesBody = getComputedStyle(document.body)
    const backgroundColorBody = stylesBody.backgroundColor

    p.forEach(function (element) {
        element.style.backgroundColor = backgroundColorBody
        element.style.color = '#ffffff'
    })

    // OUTRA FORMA DE RESOLVER O EXERCÍCIO:
    /*
    for (let v of p) {
       v.style.backgroundColor = 'var(--primary-color)'
    }
   */
})()