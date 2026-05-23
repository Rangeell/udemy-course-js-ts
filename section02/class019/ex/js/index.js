(function meuEscopo() {
    const form = document.querySelector('#form')
    const res = document.querySelector('#res')
    const userData = []

    form.addEventListener('submit', function (evento) {
        evento.preventDefault()

        function formatName(name) {
            return name = name[0].toUpperCase() + name.slice(1).toLowerCase()
        }


        const user = {
            name: form.querySelector('#iname').value,
            surname: form.querySelector('#isurname').value,
            weight: form.querySelector('#iweight').value,
            height: form.querySelector('#iheight').value
        }


        for (let i in userData) {
            if (userData[i].name === user.name) {
                alert('Esse usuário já existe!')
                return
            }
        }

        userData.push(user)

        const p = document.createElement('p')
        p.innerHTML = `${formatName(user.name)}, ${formatName(user.surname)}, ${user.weight}kg, ${user.height}cm`

        res.appendChild(p)

        form.reset()
        console.log(userData)
    })
}) ()