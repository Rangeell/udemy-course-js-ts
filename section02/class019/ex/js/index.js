// Select inputs
const input = {
    txtName: document.querySelector('#iname'),
    txtSurname: document.querySelector('#isurname'),
    txtWeight: document.querySelector('#iweight'),
    txtHeight: document.querySelector('#iheight'),
}

const res = document.querySelector('#res')
const button = document.querySelector('button[type="submit"]')
const user = []

button.addEventListener('keydown', function(enter) {
    if (enter === 'enter') {
        enter.preveventDefault()
    }
})

button.addEventListener('click', verificar)
function verificar() {
    if (input.txtName.value === ''
        || input.txtSurname.value === ''
        || input.txtWeight.value === ''
        || input.txtHeight.value === '') {
        return
    }

    const user = [
        dataUser = {
            name: input.txtName.value,
            surname: input.txtSurname.value,
            weight: input.txtWeight.value,
            height: input.txtHeight.value
        }
    ]

    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let p3 = document.createElement('p')
    let p4 = document.createElement('p')

    res.append(
        p1, p2, p3, p4
    )

    p1.innerText = `${dataUser.name}`
    p2.innerText = `${dataUser.surname}`
    p3.innerText = `${dataUser.weight}`
    p4.innerText = `${dataUser.height}`
}
