axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data)) // Podemos carregar direto (não recebemos uma promise)

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
