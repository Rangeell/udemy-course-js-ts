let diaSemana = new Date().getDay()



switch (diaSemana) {
    case 0:
        diaSemana = 'Domingo'
        break
    case 1:
        diaSemana = 'Segunda-feira'
        break
    case 2:
        diaSemana = 'Terça-feira'
        break
    case 3:
        diaSemana = 'Quarta-feira'
        break
    case 4:
        diaSemana = 'Quinta-feira'
        break
    case 5:
        diaSemana = 'Sexta feira'
        break
    case 6:
        diaSemana = 'Sábado'
        break
    default: diaSemana = 'Dia inválido'
}

console.log(diaSemana)