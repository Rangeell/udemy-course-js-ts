/*
705.484.450-52
070.987.720-03

  7   0   0   4   4   4   8   8   8  (9 primeiros dígitos)
  x   x   x   x   x   x   x   x   x
 10   9   8   7   6   5   4   3   2  (Contagem regressiva de 10 a 2)
───────────────────────────────────
 70 + 0 + 0 +28 +24 +20 +32 +24 +16  =  234 (Soma total)

  7   0   0   4   4   4   8   8   8  digito1    (10 primeiros dígitos)
  x   x   x   x   x   x   x   x   x     x
 11  10   9   8   7   6   5   4   3     2       (Contagem regressiva de 11 a 2)
────────────────────────────────────────────
 77 + 0 + 0 +32 +28 +24 +45 +32 +24     =       (Soma total)


 Descobrir o digito
 Cálculo: 11 - (234 % 11)  ──►  11 - 3  =  8
 Como o resultado é 8 (menor ou igual a 9), o primeiro dígito calculado é 8.
*/

(function myScope() {
    class ValidaFormulario {
        constructor() {
            this.formumlario = document.querySelector('form')
            this.eventos()
        }

        // Método que agrupa todos os eventos
        eventos() {
            this.formumlario.addEventListener('submit', e => { // Arrow function para não perder o contexto do this -> vai apontar para a instância
                this.handleSubmit(e) // Método que captura o evento
            })
        }

        // 
        handleSubmit(e) {
            e.preventDefault() // Impede envio do formulário
            const camposValidos = this.campoSaoValidos()
            const senhasValidas = this.senhasSaoValidas()

            if (camposValidos && senhasValidas) { // Caso os campos retornem true, o formulário é enviado
                alert('Formulário enviado!')
                this.formumlario.submit()
            }
        }

        senhasSaoValidas() {
            let valid = true

            const senha = this.formumlario.querySelector('#senha')
            const repetirSenha = this.formumlario.querySelector('#repetir-senha')

            if (senha.value !== repetirSenha.value) {
                this.criaErro(senha, 'Campos "Senha" e "Repetir senha" precisam ser idênticos.')
                this.criaErro(repetirSenha, 'Campos "Senha" e "Repetir senha" precisam ser idênticos.')
                valid = false
            }

            if (senha.value.length < 6 || senha.value.length > 12) {
                this.criaErro(senha, '"Senha" precisa estar entre 6 e 12 caracteres.')
                valid = false
            }
            return valid
        }

        // Verifica se os campos são válidos
        campoSaoValidos() {
            let valid = true //* Flag para verificar se os campos são válidos para não ter que usar "return" e parar a função inteira

            // Loop que remove todas as mensagens de erro em reenvio
            for (let errorText of this.formumlario.querySelectorAll('.error-text')) {
                errorText.remove()
                valid = false
            }

            //* Loop para checar todos os campos -> percorre todos os "campos" do formulario
            for (let campo of this.formumlario.querySelectorAll('.validar')) {

                //* Selecionamos o innerText do irmão anterior (label) ao campo
                const label = campo.previousElementSibling.innerText
                if (!campo.value) {
                    this.criaErro(campo, `O campo "${label}" não pode estar em branco.`)
                }

                if (campo.classList.contains('cpf')) {
                    if (!this.validaCPF(campo)) valid = false
                }

                if (campo.classList.contains('usuario')) {
                    if (!this.validaUsuario(campo)) valid = false
                }
            }
            return valid
        }

        // Valida o CPF
        validaCPF(campo) {
            const cpf = new ValidaCpf((campo.value)) //* Chamamos (instanciação) o objeto do outro arquivo js

            if (!cpf.valida()) {
                this.criaErro(campo, 'CPF inválido.') // Cria uma msg de erro própria do cpf
                return false
            }
            return true
        }

        // Valida caracteres do usuário
        validaUsuario(campo) {
            const usuario = campo.value
            let valid = true //* flag que verifica validez

            if (usuario.length < 3 || usuario.length > 12) {
                this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.')
                valid = false
            }

            if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
                this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e/ou números.')
                valid = false
            }

            return valid
        }

        // Cria mensagem de erro
        criaErro(campo, msg) {
            const div = document.createElement('div')
            div.innerHTML = msg
            div.classList.add('error-text')
            campo.insertAdjacentElement('afterend', div) //* Adiciona a div após o final do campo (input que falhou)
        }

    }

    // Instanciação
    const valida = new ValidaFormulario()
})()
