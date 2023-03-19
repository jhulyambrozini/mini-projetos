
import GeraCPF from './modules/GeraCPF.js'

const button = document.querySelector('button')

button.addEventListener('click', function () {
    const gera = new GeraCPF()
    const cpfGerado = document.querySelector('.cpf-gerado')
    cpfGerado.innerText = gera.geraNovoCpf()
})
