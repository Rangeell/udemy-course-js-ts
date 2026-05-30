(function myScope() {
    const elements = [
        { tag: 'p', text: 'Frase 1' },
        { tag: 'div', text: 'Frase 2' },
        { tag: 'footer', text: 'Frase 3' },
        { tag: 'section', text: 'Frase 4' }
    ]

    const main = document.querySelector('main')

    for (let i = 0; i < elements.length; i++) {
        const {tag, text} = elements[i]
        const component = document.createElement(tag)
        
        main.append(component)
        component.innerText = text
    }
})()