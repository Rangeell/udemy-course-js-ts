fetch('pessoas.json')
    .then(resposta => resposta.json()) // Pega dos dados da fetch e retornar uma nova promise (precisa de outro .then() para pegar esse valor)
    .then(json => carregaElementosNaPagina(json)) // Capturamos o array

function carregaElementosNaPagina(json) {
    const tbody = document.querySelector('tbody')

    for (let pessoas of json) {
        const tr = document.createElement('tr')

        let td = document.createElement('td')
        td.innerText = pessoas.nome
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerText = pessoas.idade
        td.style.textAlign = 'right'
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerText = pessoas.salario
        td.style.textAlign = 'right'
        tr.appendChild(td)

        tbody.appendChild(tr)
    }

    const resultado = document.querySelector('.result')
}
