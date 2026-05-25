(function MyScope() {

    function saudacao() {
        const horaAtual = new Date().getHours()

        function bomDia() {
            return console.log('Bom dia')
        }
        function boaTarde() {
            return console.log('Boa tarde')
        }
        function boaNoite() {
            return console.log('Boa noite')
        }

        if (horaAtual < 12) {
            bomDia()
        } else if (horaAtual < 18) {
            boaTarde()
        } else if (horaAtual >= 18 && horaAtual <= 23){
            boaNoite()
        } else {
            console.log('Ola')
        }
    }
    
    saudacao()

})()