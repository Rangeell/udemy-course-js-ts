(function myScope() {
    const elements = [
        { tag: 'p', text: 'Frase 1' },
        { tag: 'div', text: 'Frase 2' },
        { tag: 'section', text: 'Frase 3' },
        { tag: 'footer', text: 'Frase 4' }
    ]

    const main = document.querySelector('main')
    const kingDiv = document.createElement('div')

    for (let i = 0; i < elements.length; i++) {
        const { tag, text } = elements[i]
        const newTag = document.createElement(tag)
        const newText = document.createTextNode(text)

        newTag.appendChild(newText)
        kingDiv.append(newTag)
    }
    main.appendChild(kingDiv)

})()