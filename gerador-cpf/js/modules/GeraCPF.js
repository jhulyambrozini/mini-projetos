import ValidaCPF from "./ValidaCPF.js";

export default class GeraCPF {

    // gerador de numero aleatorio
    rand(min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max - min) + min))
    }

    formatado(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11) 
        )
    }

    geraNovoCpf() {
        const cpfSemDigito = this.rand() // pegando 9 numeros gerados
        const digito1 = ValidaCPF.criaDigito(cpfSemDigito) // add primeiro digito de verificação
        const digito2 = ValidaCPF.criaDigito(cpfSemDigito + digito1) // add segundo digito de verificação
        const novoCpf = cpfSemDigito + digito1 + digito2 // criando cpf com 11 digitos
        return this.formatado(novoCpf)
    }
}