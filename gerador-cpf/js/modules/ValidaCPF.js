export default class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
           value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    valida () {


       if(typeof this.cpfLimpo === 'undefined') return false // se so tem numeros
       if(this.cpfLimpo.length !== 11) return false
       if(this.isSequencia() ) return false
       this.geraNovoCpf()
     
       return this.novoCpf === this.cpfLimpo
    }

    geraNovoCpf () {
        const cpfParcial = this.cpfLimpo.slice(0, -2)
        const digito1 = ValidaCPF.criaDigito(cpfParcial)
        const digito2 = ValidaCPF.criaDigito(cpfParcial + digito1)
        this.novoCpf = cpfParcial + digito1 + digito2
    }

    static criaDigito (cpfParcial) {
        const cpfArray = Array.from(cpfParcial) // ARRAY com cpf sem dois ultimos digitos
        let regressivo = cpfArray.length + 1
    
        let total = cpfArray.reduce((ac, val) => {
            ac += (regressivo * Number(val)) // multiplicando os numeros do cpf por um contador regressivo
            regressivo--
            return ac
        },0)
    
        const digito = 11 - (total % 11) // digito resultado
        return digito > 9 ? 0 : String(digito) // nao permetindo que os digitos sejam maiores ou iguais a 10
    }

    isSequencia() {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
        return sequencia === this.cpfLimpo
    }

}
