class ValidaForm {

    constructor() {
        this.form = document.querySelector('.form')
        this.eventos()
    }

    eventos() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e)

        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const camposValidos = this.isValid()
        const senhasValidas = this.senhasValidas()

        if(camposValidos && senhasValidas) {
            this.form.submit()
        }
    }

    senhasValidas() {
        let valid = true

        const senha = this.form.querySelector('.senha')
        const repetirSenha = this.form.querySelector('.repetir-senha')

        if(senha.value !== repetirSenha.value) {
            valid = false
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais')
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais')
        } else {
            this.sucessValid()
        }

        if(senha.value.length < 6 || senha.value.length > 12) {
            valid = false
            this.criaErro(senha, 'Senha e repetir senha precisam ter entre 6 e 12 carcteres')  
        } else {
            this.sucessValid()
        }
        return valid
    }

    isValid() {
        let valid = true

        for(let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove()
        }

        for(let campo of this.form.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText

            if(!campo.value) {
                this.criaErro(campo, `Campo "${label}" não pode estar vazio`)
                valid = false
            } else {
                this.sucessValid(campo)

            }

            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false
            }

            if(campo.classList.contains('usuario')) {
                if(!this.ValidaUsuario(campo)) valid = false
            }
        }

        return valid
    }

    ValidaUsuario(campo) {
        const usuario = campo.value
        let valid = true

        if(usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres')
            valid = false
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres')
            valid = false
        } else {
            this.sucessValid(campo)
        }
        
        return valid
    }


     validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value)

        if(!cpf.valida()) {
            this.criaErro(campo, 'cpf invalido')
            return false
        } else {
            this.sucessValid(campo)
        }
    }

    criaErro(campo, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div)
        const formControl = campo.parentElement
        formControl.className = 'form-control error'
    }

    sucessValid(campo) {
        const formControl = campo.parentElement;
        formControl.className = 'form-control success'
    }
}

const valida = new ValidaForm()