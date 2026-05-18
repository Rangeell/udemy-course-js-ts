let agora = new Date()
let hora = agora.getHours()

let momento = 'momemto'
if (hora >= 0 && hora <= 11) {
    momento = 'manhã'
} else if (hora >= 12 && hora <= 17){
    momento = 'tarde'
} else {
    momento = 'noite'
}
console.log(`Meu nome é "Breno". Estou aprendendo JavaScript às ${hora}h da ${momento}.`)